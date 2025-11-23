import React from 'react';
import ContentPage from './ContentPage';
import ProductOverviewPageComponent from './ProductOverview';
import ProductWorkflowsPageComponent from './ProductWorkflows';
import ProductLegalResearchPageComponent from './ProductLegalResearch';
import ProductWordAddInPageComponent from './ProductWordAddIn';

export const ProductOverviewPage = () => <ProductOverviewPageComponent />;
export const ProductWordAddInPage = () => <ProductWordAddInPageComponent />;
export const ProductWorkflowsPage = () => <ProductWorkflowsPageComponent />;
export const ProductLegalResearchPage = () => <ProductLegalResearchPageComponent />;

export const SolutionsLitigationPage = () => <ContentPage pageKey="solutionsLitigation" />;
export const SolutionsCorporateLawPage = () => <ContentPage pageKey="solutionsCorporateLaw" />;
export const SolutionsBankingPage = () => <ContentPage pageKey="solutionsBanking" />;
export const SolutionsTaxCompliancePage = () => <ContentPage pageKey="solutionsTaxCompliance" />;
export const SolutionsInHousePage = () => <ContentPage pageKey="solutionsInHouse" />;
export const SolutionsLawFirmsPage = () => <ContentPage pageKey="solutionsLawFirms" />;

export const IndustryLitigationPage = () => <ContentPage pageKey="industryLitigation" />;
export const IndustryMAPage = () => <ContentPage pageKey="industryMA" />;
export const IndustryTaxPage = () => <ContentPage pageKey="industryTax" />;
export const IndustryBankingPage = () => <ContentPage pageKey="industryBanking" />;
export const IndustryEmploymentHRPage = () => <ContentPage pageKey="industryEmploymentHR" />;
export const IndustryCorporateCompliancePage = () => <ContentPage pageKey="industryCorporateCompliance" />;

export const ResourcesPage = () => <ContentPage pageKey="resources" />;
export const SecurityPage = () => <ContentPage pageKey="security" />;
export const PricingPage = () => <ContentPage pageKey="pricing" />;
