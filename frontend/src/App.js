import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OtpVerificationPage from './pages/OtpVerificationPage';
import WorkspacePage from './pages/WorkspacePage';
import {
  ProductOverviewPage,
  ProductWordAddInPage,
  ProductWorkflowsPage,
  ProductLegalResearchPage,
  SolutionsLitigationPage,
  SolutionsCorporateLawPage,
  SolutionsBankingPage,
  SolutionsTaxCompliancePage,
  SolutionsInHousePage,
  SolutionsLawFirmsPage,
  IndustryLitigationPage,
  IndustryMAPage,
  IndustryTaxPage,
  IndustryBankingPage,
  IndustryEmploymentHRPage,
  IndustryCorporateCompliancePage,
  ResourcesPage,
  SecurityPage,
  PricingPage,
} from './pages/pageComponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/overview" element={<ProductOverviewPage />} />
          <Route path="/product/word-add-in" element={<ProductWordAddInPage />} />
          <Route path="/product/workflows" element={<ProductWorkflowsPage />} />
          <Route path="/product/legal-research" element={<ProductLegalResearchPage />} />

          <Route path="/solutions/litigation" element={<SolutionsLitigationPage />} />
          <Route path="/solutions/corporate-law" element={<SolutionsCorporateLawPage />} />
          <Route path="/solutions/banking" element={<SolutionsBankingPage />} />
          <Route path="/solutions/tax-compliance" element={<SolutionsTaxCompliancePage />} />
          <Route path="/solutions/in-house" element={<SolutionsInHousePage />} />
          <Route path="/solutions/law-firms" element={<SolutionsLawFirmsPage />} />

          <Route path="/industries/litigation" element={<IndustryLitigationPage />} />
          <Route path="/industries/ma" element={<IndustryMAPage />} />
          <Route path="/industries/tax" element={<IndustryTaxPage />} />
          <Route path="/industries/banking" element={<IndustryBankingPage />} />
          <Route path="/industries/employment-hr" element={<IndustryEmploymentHRPage />} />
          <Route path="/industries/corporate-compliance" element={<IndustryCorporateCompliancePage />} />

          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-otp" element={<OtpVerificationPage />} />
          <Route path="/workspace" element={<WorkspacePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
