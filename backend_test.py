#!/usr/bin/env python3
"""
Backend API Testing Suite for Legal Tech Landing Page
Tests all FastAPI endpoints with comprehensive scenarios
"""

import requests
import json
import uuid
from datetime import datetime
import sys
import os

# Get backend URL from frontend .env
BACKEND_URL = "https://site-check-4.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name, success, message, response_data=None):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        
        self.test_results.append({
            "test": test_name,
            "success": success,
            "message": message,
            "response_data": response_data
        })
        
    def test_health_check(self):
        """Test GET /api/ endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == "Hello World":
                    self.log_test("Health Check", True, "Endpoint returns correct message", data)
                else:
                    self.log_test("Health Check", False, f"Unexpected response: {data}", data)
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
    
    def test_create_status_check(self):
        """Test POST /api/status endpoint"""
        test_data = {
            "client_name": "Acme Legal Services"
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                
                # Validate response structure
                required_fields = ["id", "client_name", "timestamp"]
                missing_fields = [field for field in required_fields if field not in data]
                
                if missing_fields:
                    self.log_test("Create Status Check", False, f"Missing fields: {missing_fields}", data)
                elif data["client_name"] != test_data["client_name"]:
                    self.log_test("Create Status Check", False, f"Client name mismatch: expected {test_data['client_name']}, got {data['client_name']}", data)
                else:
                    # Validate UUID format
                    try:
                        uuid.UUID(data["id"])
                        # Validate timestamp format
                        datetime.fromisoformat(data["timestamp"].replace('Z', '+00:00'))
                        self.log_test("Create Status Check", True, "Status check created successfully", data)
                        return data  # Return for use in other tests
                    except ValueError as ve:
                        self.log_test("Create Status Check", False, f"Invalid format: {str(ve)}", data)
            else:
                self.log_test("Create Status Check", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Create Status Check", False, f"Request error: {str(e)}")
        
        return None
    
    def test_get_status_checks(self):
        """Test GET /api/status endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/status")
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    self.log_test("Get Status Checks", True, f"Retrieved {len(data)} status checks", {"count": len(data)})
                    
                    # Validate structure of returned items
                    if data:
                        first_item = data[0]
                        required_fields = ["id", "client_name", "timestamp"]
                        missing_fields = [field for field in required_fields if field not in first_item]
                        
                        if missing_fields:
                            self.log_test("Status Check Structure", False, f"Missing fields in response: {missing_fields}", first_item)
                        else:
                            self.log_test("Status Check Structure", True, "Response structure is correct", first_item)
                    
                    return data
                else:
                    self.log_test("Get Status Checks", False, f"Expected list, got {type(data)}", data)
            else:
                self.log_test("Get Status Checks", False, f"HTTP {response.status_code}: {response.text}")
                
        except Exception as e:
            self.log_test("Get Status Checks", False, f"Request error: {str(e)}")
        
        return None
    
    def test_data_persistence(self):
        """Test that data persists between requests"""
        # Create a unique status check
        unique_name = f"Test Client {uuid.uuid4().hex[:8]}"
        test_data = {"client_name": unique_name}
        
        try:
            # Create status check
            create_response = self.session.post(
                f"{self.base_url}/status",
                json=test_data,
                headers={"Content-Type": "application/json"}
            )
            
            if create_response.status_code != 200:
                self.log_test("Data Persistence", False, f"Failed to create test data: HTTP {create_response.status_code}")
                return
            
            created_data = create_response.json()
            
            # Retrieve all status checks
            get_response = self.session.get(f"{self.base_url}/status")
            
            if get_response.status_code != 200:
                self.log_test("Data Persistence", False, f"Failed to retrieve data: HTTP {get_response.status_code}")
                return
            
            all_checks = get_response.json()
            
            # Check if our created item exists
            found = any(check["id"] == created_data["id"] for check in all_checks)
            
            if found:
                self.log_test("Data Persistence", True, f"Data persisted correctly for client: {unique_name}")
            else:
                self.log_test("Data Persistence", False, f"Created data not found in retrieval for client: {unique_name}")
                
        except Exception as e:
            self.log_test("Data Persistence", False, f"Error testing persistence: {str(e)}")
    
    def test_error_handling(self):
        """Test error handling with invalid data"""
        # Test with missing client_name
        try:
            response = self.session.post(
                f"{self.base_url}/status",
                json={},
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 422:  # FastAPI validation error
                self.log_test("Error Handling - Missing Field", True, "Correctly returns 422 for missing client_name")
            elif response.status_code == 400:
                self.log_test("Error Handling - Missing Field", True, "Correctly returns 400 for missing client_name")
            else:
                self.log_test("Error Handling - Missing Field", False, f"Unexpected status code: {response.status_code}")
                
        except Exception as e:
            self.log_test("Error Handling - Missing Field", False, f"Error testing validation: {str(e)}")
        
        # Test with invalid JSON
        try:
            response = self.session.post(
                f"{self.base_url}/status",
                data="invalid json",
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code in [400, 422]:
                self.log_test("Error Handling - Invalid JSON", True, f"Correctly handles invalid JSON with status {response.status_code}")
            else:
                self.log_test("Error Handling - Invalid JSON", False, f"Unexpected status code for invalid JSON: {response.status_code}")
                
        except Exception as e:
            self.log_test("Error Handling - Invalid JSON", False, f"Error testing invalid JSON: {str(e)}")
    
    def test_cors_headers(self):
        """Test CORS configuration"""
        try:
            response = self.session.options(f"{self.base_url}/status")
            
            cors_headers = {
                "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
                "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
                "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
            }
            
            if any(cors_headers.values()):
                self.log_test("CORS Configuration", True, "CORS headers present", cors_headers)
            else:
                self.log_test("CORS Configuration", False, "No CORS headers found", cors_headers)
                
        except Exception as e:
            self.log_test("CORS Configuration", False, f"Error testing CORS: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests")
        print(f"📍 Testing URL: {self.base_url}")
        print("=" * 60)
        
        # Run tests in logical order
        self.test_health_check()
        self.test_create_status_check()
        self.test_get_status_checks()
        self.test_data_persistence()
        self.test_error_handling()
        self.test_cors_headers()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in self.test_results if result["success"])
        total = len(self.test_results)
        
        print(f"✅ Passed: {passed}/{total}")
        print(f"❌ Failed: {total - passed}/{total}")
        
        if total - passed > 0:
            print("\n🔍 FAILED TESTS:")
            for result in self.test_results:
                if not result["success"]:
                    print(f"  • {result['test']}: {result['message']}")
        
        return passed == total

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if not success:
        sys.exit(1)
    else:
        print("\n🎉 All tests passed!")