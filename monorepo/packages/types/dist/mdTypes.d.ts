export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    ObjectIdType: string;
    DateTime: any;
    BigInt: number;
    JSONString: string;
};
export declare type AcceptEuComplianceTermsOfService = {
    readonly __typename?: "AcceptEUComplianceTermsOfService";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type AcceptTermsOfService = {
    readonly __typename?: "AcceptTermsOfService";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type AcceptTermsOfServiceInput = {
    readonly tosVersion: Scalars["Int"];
    readonly tosRegion?: Maybe<TermsOfServiceRegionType>;
};
export declare type AccountBalanceType = "CONFIRMED" | "PENDING";
export declare type ActionRequiredOrdersCsvDownload = {
    readonly __typename?: "ActionRequiredOrdersCsvDownload";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type ActionRequiredOrdersCsvDownloadInput = {
    readonly query?: Maybe<Scalars["String"]>;
    readonly searchType?: Maybe<ActionRequiredSearchType>;
    readonly offset?: Maybe<Scalars["Int"]>;
    readonly sort?: Maybe<ActionRequiredSort>;
    readonly filter?: Maybe<CsvExportFilterType>;
    readonly startDate?: Maybe<DatetimeInput>;
    readonly endDate?: Maybe<DatetimeInput>;
    readonly wishExpressOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type ActionRequiredSearchType = "ORDER_ID" | "PRODUCT_ID" | "TRACKING_NUMBER" | "USER_NAME" | "TRANSACTION_ID";
export declare type ActionRequiredSort = {
    readonly field: ActionRequiredSortFieldType;
    readonly order: SortOrderType;
};
export declare type ActionRequiredSortFieldType = "ORDER_TIME" | "RELEASED_TIME";
export declare type AdaptivePolicyAdminMutations = {
    readonly __typename?: "AdaptivePolicyAdminMutations";
    readonly manualEnrollUpload?: Maybe<AdaptivePolicyManualEnrollUpload>;
    readonly manualEnroll?: Maybe<AdaptivePolicyManualEnroll>;
};
export declare type AdaptivePolicyAdminMutationsManualEnrollUploadArgs = {
    input: AdaptivePolicyManualEnrollUploadInput;
};
export declare type AdaptivePolicyAdminMutationsManualEnrollArgs = {
    input: AdaptivePolicyManualEnrollConfirmInput;
};
export declare type AdaptivePolicyManualEnroll = {
    readonly __typename?: "AdaptivePolicyManualEnroll";
    readonly ok: Scalars["Boolean"];
    readonly logs?: Maybe<Scalars["String"]>;
};
export declare type AdaptivePolicyManualEnrollConfirmInput = {
    readonly fileUrl: Scalars["String"];
    readonly allPrivileges: Scalars["Boolean"];
    readonly resetRevenueShare: Scalars["Boolean"];
};
export declare type AdaptivePolicyManualEnrollSchema = {
    readonly __typename?: "AdaptivePolicyManualEnrollSchema";
    readonly merchantId: Scalars["ObjectIdType"];
    readonly policyTier: Scalars["String"];
    readonly reason: Scalars["String"];
};
export declare type AdaptivePolicyManualEnrollUpload = {
    readonly __typename?: "AdaptivePolicyManualEnrollUpload";
    readonly ok: Scalars["Boolean"];
    readonly logs?: Maybe<Scalars["String"]>;
    readonly updateList: ReadonlyArray<AdaptivePolicyManualEnrollSchema>;
};
export declare type AdaptivePolicyManualEnrollUploadInput = {
    readonly fileUrl: Scalars["String"];
};
export declare type AddProductPostInput = {
    readonly merchantId: Scalars["ObjectIdType"];
    readonly productId: Scalars["ObjectIdType"];
    readonly sourceBucket: Scalars["String"];
    readonly sourceBucketKey: Scalars["String"];
};
export declare type AddProductPostMutation = {
    readonly __typename?: "AddProductPostMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly errorCode?: Maybe<ProductPostErrorCode>;
};
export declare type AddressInput = {
    readonly name: Scalars["String"];
    readonly streetAddress1: Scalars["String"];
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly streetAddress3?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly county?: Maybe<Scalars["String"]>;
    readonly state: Scalars["String"];
    readonly neighborhood?: Maybe<Scalars["String"]>;
    readonly region?: Maybe<Scalars["String"]>;
    readonly countryCode?: Maybe<CountryCode>;
    readonly zipcode?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
};
export declare type AddressSchema = {
    readonly __typename?: "AddressSchema";
    readonly name: Scalars["String"];
    readonly streetAddress1: Scalars["String"];
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly zipcode?: Maybe<Scalars["String"]>;
    readonly countryCode: CountryCode;
    readonly state?: Maybe<Scalars["String"]>;
    readonly county?: Maybe<Scalars["String"]>;
    readonly country: Country;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
};
export declare type AddressUpdateError = {
    readonly __typename?: "AddressUpdateError";
    readonly orderId: Scalars["ObjectIdType"];
    readonly message: Scalars["String"];
};
export declare type AddressVerificationState = "SYSTEM_VERIFIED" | "NOT_VERIFIED" | "REQUEST_VERIFICATION" | "USER_VERIFIED" | "WPS_VERIFIED";
export declare type AddTrademark = {
    readonly __typename?: "AddTrademark";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type AddTrademarkInput = {
    readonly brandInfoId: Scalars["ObjectIdType"];
    readonly trademarkInfo: BrandPartnerTrademarkInfoInputObject;
};
export declare type AlertSchema = {
    readonly __typename?: "AlertSchema";
    readonly link?: Maybe<Scalars["String"]>;
    readonly description: Scalars["String"];
    readonly date?: Maybe<Datetime>;
    readonly sentiment?: Maybe<AlertSentiment>;
};
export declare type AlertSentiment = "INFO" | "WARNING" | "NEGATIVE";
export declare type AnalyticsServiceMutations = {
    readonly __typename?: "AnalyticsServiceMutations";
    readonly log?: Maybe<LogToTreasureData>;
};
export declare type AnalyticsServiceMutationsLogArgs = {
    input: LogToTreasureDataInput;
};
export declare type AnnouncementAdmin = {
    readonly __typename?: "AnnouncementAdmin";
    readonly announcements?: Maybe<AnnouncementListSchema>;
    readonly announcement?: Maybe<AnnouncementSchema>;
    readonly options?: Maybe<AnnouncementOptionsSchema>;
    readonly announcementJobs?: Maybe<ReadonlyArray<AnnouncementJobSchema>>;
    readonly announcementJob?: Maybe<AnnouncementJobSchema>;
    readonly announcementJobCount: Scalars["Int"];
};
export declare type AnnouncementAdminAnnouncementsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    announcementType?: Maybe<AnnouncementType>;
};
export declare type AnnouncementAdminAnnouncementArgs = {
    id: Scalars["String"];
};
export declare type AnnouncementAdminAnnouncementJobsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
};
export declare type AnnouncementAdminAnnouncementJobArgs = {
    id: Scalars["String"];
};
export declare type AnnouncementAudienceGroup = {
    readonly __typename?: "AnnouncementAudienceGroup";
    readonly title: Scalars["String"];
    readonly value: AnnouncementAudienceSource;
};
export declare type AnnouncementAudienceSource = "ALL_MERCHANTS" | "TRANSCOSMOS_LEAD" | "CN_MERCHANTS";
export declare type AnnouncementAudienceSourceType = "ENUM" | "CSV";
export declare type AnnouncementCategory = "LOGISTICS" | "INTELLECTUAL_PROPERTY" | "POLICIES_AND_TERMS" | "TAX" | "SHIPPING_CARRIERS" | "ACCOUNT_SETTINGS" | "LOGISTICS_PRICING" | "API" | "PRODUCTS" | "PAYMENTS" | "LOCAL_CURRENCY" | "ORDERS" | "INSIGHTS";
export declare type AnnouncementCategorySchema = {
    readonly __typename?: "AnnouncementCategorySchema";
    readonly type: AnnouncementCategory;
    readonly text: Scalars["String"];
};
export declare type AnnouncementContentSchema = {
    readonly __typename?: "AnnouncementContentSchema";
    readonly locale: AnnouncementLocale;
    readonly title: Scalars["String"];
    readonly message: Scalars["String"];
    readonly link?: Maybe<Scalars["String"]>;
    readonly ctaText?: Maybe<Scalars["String"]>;
    readonly ctaDueDate?: Maybe<Datetime>;
};
export declare type AnnouncementContentType = "STATIC_TEXT" | "DYNAMIC_TEXT";
export declare type AnnouncementJobSchema = {
    readonly __typename?: "AnnouncementJobSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly createdTime: Datetime;
    readonly jobType: AnnouncementJobType;
    readonly csvS3Url: Scalars["String"];
    readonly s3Filename: Scalars["String"];
    readonly sender: UserSchema;
    readonly state: AnnouncementJobState;
    readonly titleEn: Scalars["String"];
    readonly messageTemplateEn: Scalars["String"];
    readonly messageTemplateCn?: Maybe<Scalars["String"]>;
    readonly midCount: Scalars["Int"];
    readonly baseAnnouncementTotal?: Maybe<Scalars["Int"]>;
    readonly baseAnnouncementCount: Scalars["Int"];
    readonly annUrlsCsvFileUrl?: Maybe<Scalars["String"]>;
};
export declare type AnnouncementJobState = "COMPLETE" | "CREATING_ANNOUNCEMENTS" | "PARSING_CSV" | "RETRIEVING_MERCHANTS" | "NEW" | "DOWNLOADING_CSV";
export declare type AnnouncementJobType = "STATIC_TEXT" | "DYNAMIC_TEXT";
export declare type AnnouncementListSchema = {
    readonly __typename?: "AnnouncementListSchema";
    readonly announcements?: Maybe<ReadonlyArray<AnnouncementSchema>>;
    readonly count?: Maybe<Scalars["Int"]>;
};
export declare type AnnouncementLocale = "BE" | "FR" | "BG" | "HR" | "DE" | "HU" | "CS" | "HI" | "BS" | "HC" | "JA" | "RU" | "AZ" | "NL" | "PT" | "TW" | "NB" | "TR" | "TL" | "LV" | "LT" | "TH" | "RO" | "FI" | "PL" | "EL" | "EN" | "ZH" | "UK" | "VI" | "IT" | "IW" | "AR" | "EU" | "ET" | "DA" | "ID" | "ES" | "UP" | "ME" | "KK" | "SR" | "SQ" | "KO" | "SV" | "KM" | "SK" | "MS" | "SL";
export declare type AnnouncementOptionsSchema = {
    readonly __typename?: "AnnouncementOptionsSchema";
    readonly types?: Maybe<ReadonlyArray<AnnouncementType>>;
    readonly audienceGroups?: Maybe<ReadonlyArray<AnnouncementAudienceGroup>>;
};
export declare type AnnouncementProgram = "ADVANCED_LOGISTICS_PROGRAM" | "WISHPOST" | "MERCHANT_STANDING" | "WISH_EXPRESS" | "FBW_FBS" | "PARTIAL_REFUNDS" | "PRODUCTBOOST" | "RETURNS_PROGRAM" | "EPC";
export declare type AnnouncementProgramSchema = {
    readonly __typename?: "AnnouncementProgramSchema";
    readonly type: AnnouncementProgram;
    readonly text: Scalars["String"];
};
export declare type AnnouncementSchema = {
    readonly __typename?: "AnnouncementSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly type: AnnouncementType;
    readonly publishedDate?: Maybe<Datetime>;
    readonly expiryDate?: Maybe<Datetime>;
    readonly audienceSourceType: AnnouncementAudienceSourceType;
    readonly audienceGroups?: Maybe<ReadonlyArray<AnnouncementAudienceSource>>;
    readonly merchantIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly contentType?: Maybe<AnnouncementContentType>;
    readonly content: ReadonlyArray<AnnouncementContentSchema>;
    readonly sender: UserSchema;
    readonly state: AnnouncementState;
    readonly userAnnouncementCount: Scalars["Int"];
    readonly overrideEmailPreference: Scalars["Boolean"];
    readonly sourceS3FileName?: Maybe<Scalars["String"]>;
    readonly sourceS3FileUrl?: Maybe<Scalars["String"]>;
    readonly categories: ReadonlyArray<AnnouncementCategory>;
    readonly program: AnnouncementProgram;
    readonly targetLocales: ReadonlyArray<AnnouncementLocale>;
};
export declare type AnnouncementsService = {
    readonly __typename?: "AnnouncementsService";
    readonly admin?: Maybe<AnnouncementAdmin>;
    readonly forUsers?: Maybe<ReadonlyArray<MerchantAnnouncementSchema>>;
};
export declare type AnnouncementsServiceForUsersArgs = {
    announcementType: AnnouncementType;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
};
export declare type AnnouncementState = "NEW" | "UPDATE" | "COMPLETE" | "UPDATING" | "CREATING";
export declare type AnnouncementType = "SYSTEM_UPDATE" | "BD_ANNOUNCEMENT";
export declare type ApproveTrademarks = {
    readonly __typename?: "ApproveTrademarks";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ApproveTrademarksInput = {
    readonly brandInfoId: Scalars["ObjectIdType"];
    readonly trademarkIds: ReadonlyArray<Scalars["ObjectIdType"]>;
    readonly newBrandId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type Area = {
    readonly __typename?: "Area";
    readonly value: Scalars["Float"];
    readonly unit: AreaUnit;
};
export declare type AreaValueArgs = {
    targetUnit?: Maybe<AreaUnit>;
};
export declare type AreaInput = {
    readonly value: Scalars["Float"];
    readonly unit: AreaUnit;
};
export declare type AreaUnit = "SQUARE_METER" | "SQUARE_FOOT";
export declare type AttributeInput = {
    readonly name: Scalars["String"];
    readonly value: Scalars["String"];
};
export declare type AuthenticationMutations = {
    readonly __typename?: "AuthenticationMutations";
    readonly merchantSignup?: Maybe<MerchantSignupMutation>;
    readonly merchantSignupSendPhoneVerification?: Maybe<MerchantSignupSendPhoneVerificationMutation>;
    readonly login?: Maybe<LoginMutation>;
    readonly logout?: Maybe<LogoutMutation>;
    readonly notifyPasswordRecovery?: Maybe<NotifyPasswordRecoveryMutation>;
    readonly resetPassword?: Maybe<ResetPasswordMutation>;
    readonly loginAs?: Maybe<LoginAsMutations>;
    readonly gen2faCode?: Maybe<TwoFactorGenTokenMutation>;
    readonly genWechatQr?: Maybe<GenWechatQrMutation>;
    readonly checkWechatScan?: Maybe<WechatCheckScanMutation>;
};
export declare type AuthenticationMutationsMerchantSignupArgs = {
    input: MerchantSignupInput;
};
export declare type AuthenticationMutationsMerchantSignupSendPhoneVerificationArgs = {
    input: MerchantSignupSendPhoneVerificationInput;
};
export declare type AuthenticationMutationsLoginArgs = {
    input: LoginMutationInput;
};
export declare type AuthenticationMutationsNotifyPasswordRecoveryArgs = {
    input: NotifyPasswordRecoveryMutationInput;
};
export declare type AuthenticationMutationsResetPasswordArgs = {
    input: ResetPasswordMutationInput;
};
export declare type AuthenticationMutationsGen2faCodeArgs = {
    input: TwoFactorGenTokenInput;
};
export declare type AuthenticationMutationsGenWechatQrArgs = {
    input: GenWechatQrInput;
};
export declare type AuthenticationMutationsCheckWechatScanArgs = {
    input: WechatCheckScanInput;
};
export declare type AuthenticationServiceSchema = {
    readonly __typename?: "AuthenticationServiceSchema";
    readonly showCaptchaOnSignup: Scalars["Boolean"];
    readonly passwordEvaluation: PasswordEvaluation;
    readonly shopifyOnboardingAuthInfo: ShopifyOnboardingAuthInfo;
    readonly merchantInviteInfo?: Maybe<MerchantInviteInfo>;
    readonly salesforceLeadInfo?: Maybe<SalesforceLeadInfo>;
    readonly bdSignupCodeInfo?: Maybe<BdSignupCodeInfo>;
    readonly storeCategories: ReadonlyArray<Scalars["String"]>;
    readonly countriesWeShipTo: ReadonlyArray<Country>;
};
export declare type AuthenticationServiceSchemaPasswordEvaluationArgs = {
    password: Scalars["String"];
};
export declare type AuthenticationServiceSchemaMerchantInviteInfoArgs = {
    invite?: Maybe<Scalars["String"]>;
};
export declare type AuthenticationServiceSchemaSalesforceLeadInfoArgs = {
    salesforceLeadId?: Maybe<Scalars["String"]>;
};
export declare type AuthenticationServiceSchemaBdSignupCodeInfoArgs = {
    bdSignupCode?: Maybe<Scalars["String"]>;
};
export declare type BalanceTransactionRecord = {
    readonly __typename?: "BalanceTransactionRecord";
    readonly id: Scalars["ObjectIdType"];
    readonly balanceBeforeUpdate: CurrencyValue;
    readonly balanceAfterUpdate: CurrencyValue;
    readonly dateCreated: Datetime;
    readonly transactionAmount: CurrencyValue;
    readonly campaignId?: Maybe<Scalars["ObjectIdType"]>;
    readonly productId?: Maybe<Scalars["ObjectIdType"]>;
    readonly updatedReason: BalanceUpdateReason;
    readonly updateReasonDescription: Scalars["String"];
    readonly receiptId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type BalanceUpdateReason = "REFUND" | "PAYMENT_BY_CREDITS" | "ISSUING_CREDITS";
export declare type BdMerchantCountryCodeType = "CN" | "KR" | "SG" | "JP" | "US" | "HK" | "VN" | "BR" | "TW" | "EU" | "MY" | "MX";
export declare type BdSignupCodeInfo = {
    readonly __typename?: "BdSignupCodeInfo";
    readonly valid: Scalars["Boolean"];
    readonly bdName?: Maybe<Scalars["String"]>;
    readonly useMarketingTransactionBonus?: Maybe<Scalars["Boolean"]>;
};
export declare type BlurredInformationCategory = "BLURRED_WATERMARKS" | "BLURRED_OR_CENSORED_TAGS" | "BLURRED_OR_CENSORED_LOGOS";
export declare type BonusBudgetSchema = {
    readonly __typename?: "BonusBudgetSchema";
    readonly isBonusBudgetCampaign: Scalars["Boolean"];
    readonly bonusBudgetRate: Scalars["Float"];
    readonly bonusBudget: CurrencyValue;
    readonly usedBonusBudget: CurrencyValue;
    readonly bonusBudgetType: MarketingBonusBudgetType;
    readonly eligibleBonusBudgetType: MarketingBonusBudgetType;
};
export declare type BrandCategoryCode = "FASHION" | "BEAUTY" | "KID_TOYS_OR_GAME" | "MEDIA" | "SPORTS" | "SHOE" | "MOTOR" | "COPYRIGHTED_IMAGES" | "BRANDED_ACCESSORIES" | "ELECTRONIC" | "LUXURY_WELL_KNOWN";
export declare type BrandedMerchantLifeTimeStatsObjectSchema = {
    readonly __typename?: "BrandedMerchantLifeTimeStatsObjectSchema";
    readonly gmv: CurrencyValue;
    readonly cost: CurrencyValue;
    readonly orders: Scalars["Int"];
    readonly feedImpressions: Scalars["Int"];
    readonly quantitiesSold: Scalars["Int"];
};
export declare type BrandEnrollmentMutations = {
    readonly __typename?: "BrandEnrollmentMutations";
    readonly createBrandEnrollmentRequest?: Maybe<CreateBrandEnrollmentRequest>;
    readonly addTrademark?: Maybe<AddTrademark>;
    readonly deleteBrandEnrollment?: Maybe<DeleteBrandEnrollment>;
};
export declare type BrandEnrollmentMutationsCreateBrandEnrollmentRequestArgs = {
    input?: Maybe<CreateBrandEnrollmentInput>;
};
export declare type BrandEnrollmentMutationsAddTrademarkArgs = {
    input?: Maybe<AddTrademarkInput>;
};
export declare type BrandEnrollmentMutationsDeleteBrandEnrollmentArgs = {
    input?: Maybe<DeleteBrandEnrollmentInput>;
};
export declare type BrandingSchema = {
    readonly __typename?: "BrandingSchema";
    readonly brands: ReadonlyArray<MerchantBrandSchema>;
    readonly latestDateWithBrandData?: Maybe<Datetime>;
};
export declare type BrandingSchemaBrandsArgs = {
    brandIds?: Maybe<ReadonlyArray<Scalars["String"]>>;
};
export declare type BrandManagement = {
    readonly __typename?: "BrandManagement";
    readonly brands: ReadonlyArray<BrandSchema>;
    readonly numBrands: Scalars["Int"];
    readonly canManageBrands: Scalars["Boolean"];
    readonly canManageBrandToProduct: Scalars["Boolean"];
};
export declare type BrandManagementBrandsArgs = {
    brandIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    brandName?: Maybe<Scalars["String"]>;
    offset?: Maybe<Scalars["Int"]>;
    count?: Maybe<Scalars["Int"]>;
    hideDeleted?: Maybe<Scalars["Boolean"]>;
    brandTypes?: Maybe<ReadonlyArray<BrandTypeCode>>;
};
export declare type BrandManagementNumBrandsArgs = {
    brandIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    brandName?: Maybe<Scalars["String"]>;
    hideDeleted?: Maybe<Scalars["Boolean"]>;
    brandTypes?: Maybe<ReadonlyArray<BrandTypeCode>>;
};
export declare type BrandPartnerAdmin = {
    readonly __typename?: "BrandPartnerAdmin";
    readonly brandPartners: ReadonlyArray<BrandPartnerInfoSchema>;
    readonly numBrandPartners: Scalars["Int"];
    readonly brandEnrollments: ReadonlyArray<BrandPartnerBrandInfoSchema>;
    readonly numBrandEnrollments: Scalars["Int"];
};
export declare type BrandPartnerAdminBrandPartnersArgs = {
    count?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    brandName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    brandPartnerId?: Maybe<Scalars["String"]>;
    trademarkStates?: Maybe<ReadonlyArray<BrandPartnerTrademarkState>>;
    brandPartnerStates?: Maybe<ReadonlyArray<BrandPartnerState>>;
};
export declare type BrandPartnerAdminNumBrandPartnersArgs = {
    brandName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    brandPartnerId?: Maybe<Scalars["String"]>;
    trademarkStates?: Maybe<ReadonlyArray<BrandPartnerTrademarkState>>;
    brandPartnerStates?: Maybe<ReadonlyArray<BrandPartnerState>>;
};
export declare type BrandPartnerAdminBrandEnrollmentsArgs = {
    count?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    brandName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    brandPartnerId?: Maybe<Scalars["String"]>;
    brandInfoId?: Maybe<Scalars["String"]>;
    trademarkStates?: Maybe<ReadonlyArray<BrandPartnerTrademarkState>>;
};
export declare type BrandPartnerAdminNumBrandEnrollmentsArgs = {
    brandName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    brandPartnerId?: Maybe<Scalars["String"]>;
    brandInfoId?: Maybe<Scalars["String"]>;
    trademarkStates?: Maybe<ReadonlyArray<BrandPartnerTrademarkState>>;
};
export declare type BrandPartnerAdminMutations = {
    readonly __typename?: "BrandPartnerAdminMutations";
    readonly disableBrandPartner?: Maybe<DisableBrandPartner>;
    readonly approveTrademarks?: Maybe<ApproveTrademarks>;
    readonly rejectTrademarksAndBrandInfo?: Maybe<RejectTrademarksAndBrandInfo>;
    readonly editTrademarksAndBrandInfo?: Maybe<EditTrademarksAndBrandInfo>;
};
export declare type BrandPartnerAdminMutationsDisableBrandPartnerArgs = {
    input: DisableBrandPartnerInput;
};
export declare type BrandPartnerAdminMutationsApproveTrademarksArgs = {
    input: ApproveTrademarksInput;
};
export declare type BrandPartnerAdminMutationsRejectTrademarksAndBrandInfoArgs = {
    input: RejectTrademarksAndBrandInfoInput;
};
export declare type BrandPartnerAdminMutationsEditTrademarksAndBrandInfoArgs = {
    input: EditTrademarksAndBrandInfoInput;
};
export declare type BrandPartnerAuthenticationMutations = {
    readonly __typename?: "BrandPartnerAuthenticationMutations";
    readonly sendPasswordResetEmail?: Maybe<BrandPartnerSendPasswordResetEmail>;
    readonly resetPassword?: Maybe<BrandPartnerResetPassword>;
};
export declare type BrandPartnerAuthenticationMutationsSendPasswordResetEmailArgs = {
    input: BrandPartnerSendPasswordResetEmailInput;
};
export declare type BrandPartnerAuthenticationMutationsResetPasswordArgs = {
    input: BrandPartnerResetPasswordInput;
};
export declare type BrandPartnerBrandInfoSchema = {
    readonly __typename?: "BrandPartnerBrandInfoSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly brandPartnerId: Scalars["ObjectIdType"];
    readonly isNewBrand: Scalars["Boolean"];
    readonly confirmedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly confirmedBrand?: Maybe<BrandSchema>;
    readonly state: BrandPartnerBrandState;
    readonly brandOwnerName: Scalars["String"];
    readonly email: Scalars["String"];
    readonly phoneNumber: Scalars["String"];
    readonly brandRepName: Scalars["String"];
    readonly brandRepTitle: Scalars["String"];
    readonly proposedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly providedBrandName: Scalars["String"];
    readonly providedBrandWebsite?: Maybe<Scalars["String"]>;
    readonly providedBrandLogo?: Maybe<MerchantFileSchema>;
    readonly providedBrandAdditionalInfo?: Maybe<Scalars["String"]>;
    readonly authorizationProofs: ReadonlyArray<MerchantFileSchema>;
    readonly rejectionReason?: Maybe<Scalars["String"]>;
    readonly enrollmentDate: Datetime;
    readonly trademarks: ReadonlyArray<BrandPartnerTrademarkInfoSchema>;
    readonly numTrademarks: Scalars["Int"];
};
export declare type BrandPartnerBrandInfoSchemaTrademarksArgs = {
    offset?: Maybe<Scalars["Int"]>;
    count?: Maybe<Scalars["Int"]>;
    states?: Maybe<ReadonlyArray<BrandPartnerTrademarkState>>;
};
export declare type BrandPartnerBrandInfoSchemaNumTrademarksArgs = {
    states?: Maybe<ReadonlyArray<BrandPartnerTrademarkState>>;
};
export declare type BrandPartnerBrandState = "REJECTED" | "APPROVED" | "PENDING";
export declare type BrandPartnerChangeUserInfo = {
    readonly __typename?: "BrandPartnerChangeUserInfo";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type BrandPartnerChangeUserInfoInput = {
    readonly brandPartnerId?: Maybe<Scalars["ObjectIdType"]>;
    readonly firstName?: Maybe<Scalars["String"]>;
    readonly lastName?: Maybe<Scalars["String"]>;
    readonly professionalTitle?: Maybe<Scalars["String"]>;
    readonly companyName?: Maybe<Scalars["String"]>;
    readonly streetAddress1?: Maybe<Scalars["String"]>;
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly city?: Maybe<Scalars["String"]>;
    readonly state?: Maybe<Scalars["String"]>;
    readonly countryCode?: Maybe<Scalars["String"]>;
    readonly zipcode?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly currentPassword?: Maybe<Scalars["String"]>;
    readonly newPassword?: Maybe<Scalars["String"]>;
    readonly email?: Maybe<Scalars["String"]>;
    readonly internalNote?: Maybe<Scalars["String"]>;
};
export declare type BrandPartnerCountryAndRegion = {
    readonly __typename?: "BrandPartnerCountryAndRegion";
    readonly code: BrandPartnerCountryAndRegionCode;
    readonly name: Scalars["String"];
};
export declare type BrandPartnerCountryAndRegionCode = "BD" | "BE" | "BG" | "BA" | "BB" | "BM" | "BO" | "JP" | "BT" | "JM" | "JO" | "BR" | "BS" | "JE" | "BZ" | "RU" | "RS" | "RE" | "RO" | "GT" | "GR" | "BH" | "GY" | "GE" | "GD" | "GB" | "GA" | "GI" | "GH" | "OM" | "IL" | "BW" | "HR" | "HU" | "HN" | "VE" | "PR" | "PT" | "PY" | "PA" | "PE" | "PK" | "PH" | "PL" | "ZM" | "EE" | "EG" | "ZA" | "EC" | "IT" | "EU" | "SA" | "ES" | "ME" | "MD" | "UY" | "MC" | "UZ" | "MM" | "MN" | "US" | "MU" | "MT" | "MV" | "MS" | "UA" | "MX" | "AT" | "FR" | "MA" | "FI" | "FJ" | "NI" | "NL" | "NO" | "NA" | "NG" | "NZ" | "NP" | "NU" | "CH" | "CO" | "CN" | "CL" | "CA" | "CZ" | "CY" | "CR" | "SZ" | "KG" | "KE" | "SR" | "KH" | "SV" | "SK" | "KR" | "SI" | "SH" | "KW" | "SM" | "SC" | "KZ" | "KY" | "SG" | "SE" | "DO" | "DM" | "DK" | "DE" | "DZ" | "MK" | "LC" | "TW" | "TT" | "TR" | "LK" | "LI" | "TN" | "TO" | "LT" | "LU" | "TH" | "AE" | "AD" | "AG" | "VG" | "AI" | "VI" | "IS" | "AM" | "AL" | "VN" | "AR" | "AU" | "LV" | "AW" | "IN" | "AZ" | "IE" | "ID" | "MY" | "QA";
export declare type BrandPartnerInfoSchema = {
    readonly __typename?: "BrandPartnerInfoSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly isBrandPartnerV2: Scalars["Boolean"];
    readonly brandPartnerName: Scalars["String"];
    readonly firstName?: Maybe<Scalars["String"]>;
    readonly lastName?: Maybe<Scalars["String"]>;
    readonly lastUpdated: Datetime;
    readonly internalNote?: Maybe<Scalars["String"]>;
    readonly professionalTitle?: Maybe<Scalars["String"]>;
    readonly companyName?: Maybe<Scalars["String"]>;
    readonly email: Scalars["String"];
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly businessAddress?: Maybe<AddressSchema>;
    readonly state: BrandPartnerState;
    readonly brandInfos: ReadonlyArray<BrandPartnerBrandInfoSchema>;
    readonly numBrandInfos: Scalars["Int"];
    readonly onboarding: BrandPartnerOnboardingSchema;
    readonly takedownRequests: ReadonlyArray<TakedownRequestSchema>;
    readonly numTakedownRequests: Scalars["Int"];
};
export declare type BrandPartnerInfoSchemaBrandInfosArgs = {
    brandNameQuery?: Maybe<Scalars["String"]>;
    brandInfoIdQuery?: Maybe<Scalars["String"]>;
    offset?: Maybe<Scalars["Int"]>;
    count?: Maybe<Scalars["Int"]>;
    states?: Maybe<ReadonlyArray<BrandPartnerBrandState>>;
};
export declare type BrandPartnerInfoSchemaNumBrandInfosArgs = {
    brandNameQuery?: Maybe<Scalars["String"]>;
    states?: Maybe<ReadonlyArray<BrandPartnerBrandState>>;
};
export declare type BrandPartnerInfoSchemaTakedownRequestsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    count?: Maybe<Scalars["Int"]>;
    reportIdQuery?: Maybe<Scalars["String"]>;
    brandNameQuery?: Maybe<Scalars["String"]>;
    states?: Maybe<ReadonlyArray<TakedownRequestState>>;
};
export declare type BrandPartnerInfoSchemaNumTakedownRequestsArgs = {
    reportIdQuery?: Maybe<Scalars["String"]>;
    brandNameQuery?: Maybe<Scalars["String"]>;
    states?: Maybe<ReadonlyArray<TakedownRequestState>>;
};
export declare type BrandPartnerMutations = {
    readonly __typename?: "BrandPartnerMutations";
    readonly takedownRequest?: Maybe<TakedownRequestMutations>;
    readonly brandEnrollmentMutations?: Maybe<BrandEnrollmentMutations>;
    readonly user?: Maybe<BrandPartnerUserMutations>;
    readonly authentication?: Maybe<BrandPartnerAuthenticationMutations>;
    readonly admin?: Maybe<BrandPartnerAdminMutations>;
};
export declare type BrandPartnerOnboardingSchema = {
    readonly __typename?: "BrandPartnerOnboardingSchema";
    readonly steps: ReadonlyArray<BrandPartnerOnboardingStep>;
    readonly numStepsLeft: Scalars["Int"];
    readonly numStepsCompleted: Scalars["Int"];
    readonly numSteps: Scalars["Int"];
};
export declare type BrandPartnerOnboardingSchemaStepsArgs = {
    completed?: Maybe<Scalars["Boolean"]>;
};
export declare type BrandPartnerOnboardingStep = {
    readonly __typename?: "BrandPartnerOnboardingStep";
    readonly name: BrandPartnerOnboardingSteps;
    readonly title: Scalars["String"];
    readonly description: Scalars["String"];
    readonly ctaText: Scalars["String"];
    readonly ctaLink: Scalars["String"];
    readonly illustration?: Maybe<Scalars["String"]>;
    readonly completed: Scalars["Boolean"];
};
export declare type BrandPartnerOnboardingSteps = "CONFIRM_EMAIL" | "ENROLL_BRAND";
export declare type BrandPartnerResetPassword = {
    readonly __typename?: "BrandPartnerResetPassword";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly email?: Maybe<Scalars["String"]>;
};
export declare type BrandPartnerResetPasswordInput = {
    readonly password: Scalars["String"];
    readonly token: Scalars["String"];
    readonly tfaToken?: Maybe<Scalars["String"]>;
};
export declare type BrandPartnerSendPasswordResetEmail = {
    readonly __typename?: "BrandPartnerSendPasswordResetEmail";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type BrandPartnerSendPasswordResetEmailInput = {
    readonly email: Scalars["String"];
};
export declare type BrandPartnerState = "PENDING_PHONE" | "REJECTED" | "PENDING_EMAIL" | "PENDING_REVIEW" | "ACTIVE" | "PENDING";
export declare type BrandPartnerTrademarkInfoInputObject = {
    readonly trademarkName: Scalars["String"];
    readonly location: BrandPartnerCountryAndRegionCode;
    readonly trademarkType: BrandPartnerTrademarkType;
    readonly registrationNumber: Scalars["String"];
    readonly registrationUrl?: Maybe<Scalars["String"]>;
    readonly registrationDocs: ReadonlyArray<FileInput>;
};
export declare type BrandPartnerTrademarkInfoSchema = {
    readonly __typename?: "BrandPartnerTrademarkInfoSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly brandPartnerId: Scalars["ObjectIdType"];
    readonly brandInfoId: Scalars["ObjectIdType"];
    readonly brandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly state: BrandPartnerTrademarkState;
    readonly location: BrandPartnerCountryAndRegion;
    readonly trademarkName: Scalars["String"];
    readonly trademarkType: BrandPartnerTrademarkType;
    readonly registrationNumber: Scalars["String"];
    readonly registrationUrl?: Maybe<Scalars["String"]>;
    readonly registrationDocs: ReadonlyArray<MerchantFileSchema>;
    readonly rejectionReason?: Maybe<Scalars["String"]>;
    readonly enrollmentDate: Datetime;
};
export declare type BrandPartnerTrademarkState = "REJECTED" | "APPROVED" | "PENDING";
export declare type BrandPartnerTrademarkType = "OTHER" | "WORDMARK" | "DESIGNMARK";
export declare type BrandPartnerUserMutations = {
    readonly __typename?: "BrandPartnerUserMutations";
    readonly changeUserInfo?: Maybe<BrandPartnerChangeUserInfo>;
};
export declare type BrandPartnerUserMutationsChangeUserInfoArgs = {
    input: BrandPartnerChangeUserInfoInput;
};
export declare type BrandProtectionConstants = {
    readonly __typename?: "BrandProtectionConstants";
    readonly holidayMessage: Scalars["String"];
};
export declare type BrandReach = "INTERNATIONAL" | "REGIONAL" | "LOCAL" | "ONLINE";
export declare type BrandSchema = {
    readonly __typename?: "BrandSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: Scalars["String"];
    readonly displayName: Scalars["String"];
    readonly brandTypes?: Maybe<ReadonlyArray<BrandType>>;
    readonly isTrueBrand: Scalars["Boolean"];
    readonly logoUrl?: Maybe<Scalars["String"]>;
    readonly logoAspectRatio: Scalars["Float"];
    readonly brandUrl?: Maybe<Scalars["String"]>;
    readonly isAdult: Scalars["Boolean"];
    readonly isActive: Scalars["Boolean"];
    readonly ipViolationCategory?: Maybe<IpViolationBrandCategory>;
    readonly severity?: Maybe<BrandSeverity>;
    readonly keywords?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly autoApproveMerchantIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly numTaggedProducts?: Maybe<Scalars["Int"]>;
    readonly brandProductTags?: Maybe<ReadonlyArray<TrueTagSchema>>;
    readonly minimumPrice?: Maybe<CurrencyValue>;
    readonly brandReach?: Maybe<BrandReach>;
    readonly counterfeitRiskLevel?: Maybe<CounterfeitRiskLevel>;
    readonly brandOwnerEntityCountry?: Maybe<Country>;
    readonly manufacturingCountry?: Maybe<Country>;
    readonly internalNote?: Maybe<Scalars["String"]>;
};
export declare type BrandServiceSchema = {
    readonly __typename?: "BrandServiceSchema";
    readonly brandManagement?: Maybe<BrandManagement>;
    readonly trueBrands: ReadonlyArray<BrandSchema>;
    readonly acceptedTrademarkCountries: ReadonlyArray<TrademarkCountryCode>;
    readonly brandPartnerTrademarkLocations: ReadonlyArray<BrandPartnerCountryAndRegion>;
    readonly brandPartnerAdmin?: Maybe<BrandPartnerAdmin>;
};
export declare type BrandServiceSchemaTrueBrandsArgs = {
    brandIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    brandName?: Maybe<Scalars["String"]>;
    queryString?: Maybe<Scalars["String"]>;
    offset?: Maybe<Scalars["Int"]>;
    count?: Maybe<Scalars["Int"]>;
    sort?: Maybe<BrandSort>;
};
export declare type BrandServiceSchemaAcceptedTrademarkCountriesArgs = {
    usePriorityOrdering?: Maybe<Scalars["Boolean"]>;
};
export declare type BrandSeverity = "HIGH" | "MEDIUM" | "LOW";
export declare type BrandSort = {
    readonly field: BrandSortField;
    readonly order: SortOrderType;
};
export declare type BrandSortField = "ID" | "NAME";
export declare type BrandType = {
    readonly __typename?: "BrandType";
    readonly brandType: BrandTypeCode;
    readonly displayName: Scalars["String"];
};
export declare type BrandTypeCode = "DEFAULT" | "TRUE_BRAND" | "TRO" | "COPYRIGHT_IMAGE" | "BRAND_OF_INTEREST";
export declare type BuyerFraudReasonCategory = "MERCHANT_REPORTED_SUSPICIOUS_SHIPPING_LOCATION" | "MERCHANT_REPORTED_POLICY_ABUSE" | "MERCHANT_REPORTED_OTHER" | "MERCHANT_REPORTED_SUSPICIOUS_QUANTITY_OR_PAYMENT";
export declare type ByUserIdInput = {
    readonly id: Scalars["ObjectIdType"];
};
export declare type ByUserIdMutation = {
    readonly __typename?: "ByUserIdMutation";
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
    readonly sessionKey?: Maybe<Scalars["String"]>;
};
export declare type CampaignProductSchema = {
    readonly __typename?: "CampaignProductSchema";
    readonly productId: Scalars["ObjectIdType"];
    readonly product?: Maybe<ProductSchema>;
    readonly keywords: ReadonlyArray<Scalars["String"]>;
    readonly isMaxboost: Scalars["Boolean"];
    readonly brandId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type CampaignSchema = {
    readonly __typename?: "CampaignSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: Scalars["String"];
    readonly merchant: MerchantSchema;
    readonly state: MarketingCampaignState;
    readonly products: ReadonlyArray<CampaignProductSchema>;
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly isEvergreen: Scalars["Boolean"];
    readonly intenseBoost: Scalars["Boolean"];
    readonly maxBudget: CurrencyValue;
    readonly scheduledAddBudget: ScheduledAddBudgetSchema;
    readonly merchantBudget: CurrencyValue;
    readonly merchantId: Scalars["ObjectIdType"];
    readonly localizedCurrency: PaymentCurrencyCode;
    readonly flexibleBudget: FlexibleBudgetSchema;
    readonly bonusBudget: BonusBudgetSchema;
};
export declare type CancelChargeTransactionInput = {
    readonly chargeId: Scalars["String"];
};
export declare type CancelChargeTransactionMutation = {
    readonly __typename?: "CancelChargeTransactionMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type CancelMfpCampaign = {
    readonly __typename?: "CancelMFPCampaign";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type CancelMfpCampaignInput = {
    readonly campaignId: Scalars["ObjectIdType"];
    readonly cancelReason: CancelReason;
    readonly comment?: Maybe<Scalars["String"]>;
};
export declare type CancelReason = "CANCEL_REASON_UNSPECIFIED" | "CANCEL_REASON_WISH_CANCELLED_FAILED_DEPENDENCIES" | "CANCEL_REASON_MERCHANT_CANCELLED_WRONG_CAMPAIGN_INFO" | "CANCEL_REASON_WRONG_PRODUCTS" | "CANCEL_REASON_OTHER";
export declare type CancelWfpWithholdMutation = {
    readonly __typename?: "CancelWFPWithholdMutation";
    readonly ok: Scalars["Boolean"];
    readonly message: Scalars["String"];
    readonly orderId?: Maybe<Scalars["String"]>;
    readonly merchantId?: Maybe<Scalars["String"]>;
};
export declare type CancelWfpWithholdMutationInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly cancelTicket: Scalars["String"];
    readonly cancelReason?: Maybe<Scalars["String"]>;
};
export declare type CancelWpsTrackingIdInput = {
    readonly orderId: Scalars["ObjectIdType"];
};
export declare type CancelWpsTrackingIdMutation = {
    readonly __typename?: "CancelWPSTrackingIDMutation";
    readonly ok: Scalars["Boolean"];
    readonly wpsShipmentId?: Maybe<Scalars["String"]>;
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type CartPriceDetailSchema = {
    readonly __typename?: "CartPriceDetailSchema";
    readonly productPrice?: Maybe<CurrencyValue>;
    readonly shippingPrice?: Maybe<CurrencyValue>;
    readonly total?: Maybe<CurrencyValue>;
};
export declare type CartPriceDetailSchemaProductPriceArgs = {
    includeTax?: Maybe<Scalars["Boolean"]>;
};
export declare type CartPriceDetailSchemaShippingPriceArgs = {
    includeTax?: Maybe<Scalars["Boolean"]>;
};
export declare type CaTaxConstants = {
    readonly __typename?: "CATaxConstants";
    readonly marketplaceProvinces: ReadonlyArray<Scalars["String"]>;
    readonly pstQstProvinces: ReadonlyArray<Scalars["String"]>;
};
export declare type ChangeDisplayNameInput = {
    readonly displayName: Scalars["String"];
};
export declare type ChangeDisplayNameMutation = {
    readonly __typename?: "ChangeDisplayNameMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly displayName?: Maybe<Scalars["String"]>;
};
export declare type ChangeEmailInput = {
    readonly email: Scalars["String"];
    readonly password: Scalars["String"];
};
export declare type ChangeEmailMutation = {
    readonly __typename?: "ChangeEmailMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly passwordOk?: Maybe<Scalars["Boolean"]>;
    readonly email?: Maybe<Scalars["String"]>;
};
export declare type ChangeLocaleInput = {
    readonly locale: Locale;
};
export declare type ChangeLocaleMutation = {
    readonly __typename?: "ChangeLocaleMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly locale?: Maybe<Locale>;
};
export declare type ChangePasswordInput = {
    readonly curPassword?: Maybe<Scalars["String"]>;
    readonly newPassword?: Maybe<Scalars["String"]>;
};
export declare type ChangePasswordMutation = {
    readonly __typename?: "ChangePasswordMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly passwordOk?: Maybe<Scalars["Boolean"]>;
};
export declare type ChangePhoneNumberMutation = {
    readonly __typename?: "ChangePhoneNumberMutation";
    readonly sendCode: ChangePhoneNumberSendCodeMutation;
    readonly verifyCode: ChangePhoneNumberVerifyCodeMutation;
};
export declare type ChangePhoneNumberMutationSendCodeArgs = {
    input: ChangePhoneNumberSendCodeInput;
};
export declare type ChangePhoneNumberMutationVerifyCodeArgs = {
    input: ChangePhoneNumberVerifyCodeInput;
};
export declare type ChangePhoneNumberSendCodeInput = {
    readonly newPhoneNumber: Scalars["String"];
};
export declare type ChangePhoneNumberSendCodeMutation = {
    readonly __typename?: "ChangePhoneNumberSendCodeMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly sentOk: Scalars["Boolean"];
};
export declare type ChangePhoneNumberVerifyCodeInput = {
    readonly newPhoneNumber: Scalars["String"];
    readonly verificationCode: Scalars["String"];
};
export declare type ChangePhoneNumberVerifyCodeMutation = {
    readonly __typename?: "ChangePhoneNumberVerifyCodeMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly verifiedOk: Scalars["Boolean"];
};
export declare type ChangePreferredUnitsInput = {
    readonly preferredWeightUnit: WeightUnit;
    readonly preferredLengthUnit: LengthUnit;
};
export declare type ChangePreferredUnitsMutation = {
    readonly __typename?: "ChangePreferredUnitsMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type ChangeShippingProviderStatus = {
    readonly __typename?: "ChangeShippingProviderStatus";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly shippingProvider?: Maybe<ShippingProviderSchema>;
};
export declare type ChangeShippingProviderStatusInput = {
    readonly providerId: Scalars["Int"];
};
export declare type ChangeVacationModeInput = {
    readonly setToOn?: Maybe<Scalars["Boolean"]>;
    readonly destState?: Maybe<CommerceMerchantState>;
    readonly vacationStartDate?: Maybe<DatetimeInput>;
    readonly vacationEndDate?: Maybe<DatetimeInput>;
};
export declare type ChangeVacationModeMutation = {
    readonly __typename?: "ChangeVacationModeMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly onVacationMode?: Maybe<Scalars["Boolean"]>;
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type ChargeInput = {
    readonly chargeId: Scalars["String"];
    readonly chargeProvider?: Maybe<ChargePaymentProviderType>;
    readonly clientToken?: Maybe<Scalars["String"]>;
    readonly paypalPayerId?: Maybe<Scalars["String"]>;
    readonly paypalPayerEmail?: Maybe<Scalars["String"]>;
    readonly paypalDeviceData?: Maybe<Scalars["String"]>;
};
export declare type ChargeItem = {
    readonly __typename?: "ChargeItem";
    readonly type: ChargeItemType;
};
export declare type ChargeItemType = "STORE_REGISTRATION_FEE" | "PRODUCT_BOOST_CAMPAIGN";
export declare type ChargeMutation = {
    readonly __typename?: "ChargeMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ChargePaymentProviderType = "NONE" | "PAYONEER" | "PAYPAL" | "UMPAY";
export declare type ChargeTransactionInfo = {
    readonly __typename?: "ChargeTransactionInfo";
    readonly chargeProvider?: Maybe<ChargePaymentProviderType>;
    readonly chargeItem?: Maybe<ChargeItem>;
    readonly currency?: Maybe<PaymentCurrencyCode>;
    readonly totalAmountInUsd?: Maybe<CurrencyValue>;
    readonly totalAmount?: Maybe<CurrencyValue>;
    readonly state: ChargeTransactionState;
    readonly chargeCreatedTime: Datetime;
    readonly chargeReceivedTime?: Maybe<Datetime>;
    readonly canChangeChargeProvider: Scalars["Boolean"];
    readonly type: ChargeTransactionType;
    readonly clientToken?: Maybe<Scalars["String"]>;
    readonly signupUrl?: Maybe<Scalars["String"]>;
};
export declare type ChargeTransactionState = "EXCEPTION" | "SUCCEEDED" | "REFUNDED" | "VOIDED" | "FAILED" | "NEW" | "REQUIRE_REVIEW" | "PENDING";
export declare type ChargeTransactionType = "INVOICING" | "BUYING";
export declare type CheckpointAfterActionState = "DELETE_FOR_REUSE_API_SUCCESS" | "EXCEPTION" | "IN_TRANSIT" | "ATTEMPT_FAIL" | "REACTIVATE_FAIL" | "DELETE_SUCCESS" | "PENDING" | "DELETE_FAIL" | "TRACK_END" | "DELETE_FOR_REUSE_API_FAIL" | "EXPIRED" | "MARKED_SHIPPED" | "DELIVERED" | "TRACKING_CHANGED" | "AVAILABLE_FOR_PICKUP" | "CANCELLED" | "ARRIVE_AT_DEST_COUNTRY" | "ORDER_PLACED" | "SEND_TRACKING_FAIL" | "DELETE_FOR_REUSE_DATA" | "ALERT" | "OUT_FOR_DELIVERY" | "INFO_RECEIVED" | "REACTIVATE_SUCCESS" | "SEND_TRACKING_SUCCESS";
export declare type ClearAllUiState = {
    readonly __typename?: "ClearAllUIState";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ClearUiState = {
    readonly __typename?: "ClearUIState";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ClientWritableBucket = "BRAND_LOGO" | "RACC_SOURCE_ASSETS" | "TEMP_UPLOADS" | "REGULATOR_REPORT_FILE_UPLOADS" | "TEMP_UPLOADS_V2" | "PUBLIC_APP_LOGO" | "TAX_SETTING_FILE_UPLOADS";
export declare type ColumnCategoryId = "LOGISTICS" | "COUNTRY_SHIPPING" | "PRODUCT_DETAILS" | "TTD";
export declare type ColumnCategorySchema = {
    readonly __typename?: "ColumnCategorySchema";
    readonly id: ColumnCategoryId;
    readonly name: Scalars["String"];
};
export declare type CommerceMerchantEuEntityStatus = "NOT_STARTED" | "VALIDATED" | "REJECTED" | "PENDING_REVIEW" | "NOT_ESTABLISHED";
export declare type CommerceMerchantReviewStatus = "FAILED" | "NOT_APPLICABLE" | "PENDING_ADMIN_REVIEW" | "APPROVED" | "PENDING_AUTO_REVIEW";
export declare type CommerceMerchantState = "WISH_EXPRESS_ONLY" | "PENDING_PHONE" | "REQUEST_INFO" | "VACATION" | "DISABLED" | "PENDING_EMAIL" | "APPROVED" | "PENDING";
export declare type CommerceMerchantTaxInfoGermanyNoNumberReason = "WILL_REGISTER_SOON" | "BUYER_IS_IMPORTER_OF_RECORD";
export declare type CommerceMerchantTaxInfoStatus = "OLD_ACTIVE_NEW_PENDING_REVIEW" | "INACTIVE" | "PENDING_ONESOURCE_SETUP" | "ACTIVE" | "PENDING_REVIEW" | "FAILED_REVIEW";
export declare type CommerceProductCondition = "NEW" | "USED" | "REFURBISHED";
export declare type CommerceProductReviewStatus = "REJECTED" | "APPROVED" | "PENDING";
export declare type CommerceProductStatus = "DISABLED" | "REMOVED_BY_MERCHANT" | "ENABLED";
export declare type CommerceTransactionClient = "ANDROID_INSTANT_APP" | "WEB" | "WINDOWS_APP" | "IOS_APP" | "ANDROID_APP" | "WINDOWS_PHONE_APP" | "IPAD_APP" | "MOBILE_WEB";
export declare type CommerceTransactionState = "REQUIRE_REVIEW" | "EXCEPTION" | "C2C_ACCEPTED" | "LABEL_GENERATED" | "LABEL_DOWNLOADED" | "REFUNDED" | "DELAYING" | "ACKNOWLEDGED" | "GIFT_WAITING_FOR_ACCEPT" | "C2C_DELIVERED" | "SHIPPED" | "C2C_ON_DELIVERY" | "PENDING" | "APPROVED" | "DECLINED";
export declare type CommerceTransactionTaxEventType = "REFUND_SHIPPING" | "SALE_SHIPPING" | "REFUND_PRICE" | "SALE_PRICE";
export declare type CommerceTransactionTaxRemitType = "MERCHANT_REMIT" | "WISH_REMIT" | "NO_REMIT" | "TBD_REMIT";
export declare type ConfirmedDeliveryCarriers = {
    readonly __typename?: "ConfirmedDeliveryCarriers";
    readonly availableCountries: ReadonlyArray<Country>;
    readonly shippingProviders: ReadonlyArray<ShippingProviderSchema>;
    readonly availableShippingCountries: ReadonlyArray<CountryAvailableShippingProviders>;
    readonly swedenConfirmedDeliveredCarrierTypes: ReadonlyArray<SwedenConfirmedDeliveredCarrierTypes>;
};
export declare type ConversionRate = "MKL_POLICY" | "WISH_LATEST";
export declare type ConvertToPlus = {
    readonly __typename?: "ConvertToPlus";
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type Count = {
    readonly __typename?: "Count";
    readonly value: Scalars["Float"];
    readonly unit: CountUnit;
};
export declare type CountValueArgs = {
    targetUnit?: Maybe<CountUnit>;
};
export declare type CounterfeitReasonCode = "UNLICENSED_MEDIA" | "SAFETY_EQUIPMENT" | "LIGHTERS" | "PROP_MONEY" | "GRAPHIC_VIOLENCE" | "ILLEGAL_ELECTRONICS" | "ANIMAL_PRODUCTS" | "BLURRED_WATERMARK" | "WISH_ADMIN" | "HARMFUL_CHEMICALS" | "CN_PROHIBITED_PRODUCTS" | "FALSE_ADVERTISING" | "RECALLED_TOYS" | "CARSEAT" | "PLANTS_AND_SEEDS" | "UNVERIFIED_MONEY" | "WEAPON" | "TEAM_LOGO" | "PICTURED_WITH_MAJOR_BRAND" | "PIERCING_GUN" | "ADULT_CONTENT" | "PRICE_GOUGING" | "SMOKING" | "MISLEADING_LISTING" | "REGIONAL_RESTRICTIONS" | "PRODUCT_MODIFIED" | "CENSORED_FACE" | "NUDITY" | "HATE_CRIME" | "BLURRED_LABEL" | "MEDICAL_MATERIALS" | "AMBIGUOUS_LISTING" | "HOVERBOARD" | "CELEBRITY_PHOTO" | "TRICK_CANDLES" | "BLURRED_INFORMATION" | "CONSUMPTION_MATERIALS" | "HAZARDOUS_MATERIALS" | "IS_MAJOR_BRAND" | "DISTASTEFUL_CONTENT" | "DANGEROUS_ITEMS" | "HARNESS" | "TATTOO_GUN" | "MISLEADING_LISTING_AUTHENTIC_BRAND" | "CONTACT_LENSES" | "VIRTUAL_GOODS" | "BIKE_HELMETS" | "PLANT_SEEDS";
export declare type CounterfeitRiskLevel = "HIGH" | "MEDIUM" | "LOW";
export declare type CountInput = {
    readonly value: Scalars["Float"];
    readonly unit: CountUnit;
};
export declare type Country = {
    readonly __typename?: "Country";
    readonly code: CountryCode;
    readonly name: Scalars["String"];
    readonly gmvRank?: Maybe<Scalars["Int"]>;
    readonly regions?: Maybe<ReadonlyArray<Region>>;
    readonly wishExpress: WishExpressCountryDetails;
    readonly restrictedProductRegion?: Maybe<RestrictedProductRegion>;
    readonly isInEurope: Scalars["Boolean"];
};
export declare type CountryNameArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type CountryActionInput = {
    readonly countryCode: ShippableCountryCode;
    readonly action: CountryActionType;
    readonly data?: Maybe<Scalars["String"]>;
};
export declare type CountryActionType = "ADD" | "DELETE" | "UPDATE";
export declare type CountryAvailableShippingProviders = {
    readonly __typename?: "CountryAvailableShippingProviders";
    readonly country: Country;
    readonly providers: ReadonlyArray<ShippingProviderSchema>;
};
export declare type CountryCode = "BD" | "WF" | "BF" | "BG" | "BA" | "BB" | "BE" | "BL" | "BM" | "BN" | "BO" | "JP" | "BI" | "BJ" | "BT" | "JM" | "BV" | "JO" | "WS" | "BQ" | "BR" | "BS" | "JE" | "BY" | "BZ" | "RU" | "RW" | "RS" | "RE" | "TM" | "TJ" | "RO" | "TK" | "GW" | "GU" | "GT" | "GS" | "GR" | "GQ" | "GP" | "BH" | "GY" | "GG" | "GF" | "GE" | "GD" | "GB" | "GA" | "GN" | "GM" | "GL" | "KW" | "GI" | "GH" | "OM" | "TN" | "BW" | "HR" | "HT" | "HU" | "HK" | "HN" | "HM" | "KR" | "AD" | "PR" | "PS" | "PW" | "PT" | "KN" | "PY" | "AI" | "PA" | "PF" | "PG" | "PE" | "PK" | "PH" | "PN" | "PL" | "PM" | "ZM" | "EH" | "EE" | "EG" | "ZA" | "EC" | "AL" | "AO" | "KZ" | "ET" | "ZW" | "KY" | "ZR" | "ER" | "ME" | "MD" | "MG" | "MA" | "MC" | "UZ" | "MM" | "ML" | "MO" | "MN" | "MH" | "MK" | "MU" | "MT" | "MW" | "MV" | "MQ" | "MP" | "UK" | "MR" | "AU" | "UG" | "MY" | "MX" | "MZ" | "FR" | "AW" | "FX" | "AF" | "AX" | "FI" | "FJ" | "FK" | "FM" | "FO" | "NI" | "NL" | "NO" | "NA" | "VU" | "NC" | "NE" | "NF" | "NG" | "NZ" | "ES" | "NP" | "NR" | "NU" | "CK" | "CI" | "CH" | "CO" | "CN" | "CM" | "CL" | "CC" | "CA" | "CG" | "CF" | "CZ" | "CY" | "CX" | "CR" | "CW" | "CV" | "SZ" | "SX" | "KG" | "KE" | "SR" | "KI" | "KH" | "SV" | "KM" | "ST" | "SK" | "SJ" | "SI" | "SH" | "SO" | "SN" | "SM" | "SL" | "SC" | "SB" | "SA" | "SG" | "SE" | "SD" | "DO" | "DM" | "DJ" | "DK" | "DE" | "YE" | "AT" | "DZ" | "US" | "UY" | "YU" | "YT" | "UM" | "TZ" | "LC" | "LA" | "MS" | "TW" | "TT" | "TR" | "LK" | "TP" | "LI" | "LV" | "TO" | "LT" | "LU" | "LR" | "LS" | "TH" | "TF" | "TG" | "TD" | "TC" | "LY" | "VA" | "VC" | "AE" | "VE" | "AG" | "VG" | "IQ" | "VI" | "IS" | "AM" | "IT" | "VN" | "AN" | "AQ" | "AS" | "AR" | "IM" | "IL" | "IO" | "IN" | "LB" | "AZ" | "IE" | "ID" | "UA" | "QA" | "TV";
export declare type CountryShippingInput = {
    readonly countryCode: CountryCode;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly price?: Maybe<CurrencyInput>;
    readonly timeToDoor?: Maybe<Scalars["Int"]>;
    readonly regionShipping?: Maybe<ReadonlyArray<RegionShippingInput>>;
};
export declare type CountryShippingSchema = {
    readonly __typename?: "CountryShippingSchema";
    readonly country: Country;
    readonly enabled: Scalars["Boolean"];
    readonly price?: Maybe<CurrencyValue>;
    readonly regionShipping?: Maybe<ReadonlyArray<RegionShippingSchema>>;
    readonly timeToDoor?: Maybe<Scalars["Int"]>;
    readonly wishExpressTtdRequirement?: Maybe<Scalars["Int"]>;
};
export declare type CountryShippingSetting = {
    readonly countryCode: ShippableCountryCode;
    readonly enabled: Scalars["Boolean"];
    readonly price?: Maybe<CurrencyInput>;
};
export declare type CountUnit = "COUNT" | "LOAD" | "POD" | "ROLL" | "WASH";
export declare type CreateBrandEnrollmentInput = {
    readonly proposedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly brandOwnerName: Scalars["String"];
    readonly proofOfAuthorizations: ReadonlyArray<FileInput>;
    readonly brandRepName: Scalars["String"];
    readonly brandRepTitle: Scalars["String"];
    readonly email: Scalars["String"];
    readonly phoneNumber: Scalars["String"];
    readonly isNewBrand: Scalars["Boolean"];
    readonly providedBrandName: Scalars["String"];
    readonly providedBrandWebsite?: Maybe<Scalars["String"]>;
    readonly providedBrandLogoFile?: Maybe<FileInput>;
    readonly providedBrandAdditionalInfo?: Maybe<Scalars["String"]>;
    readonly trademarkInfos: ReadonlyArray<BrandPartnerTrademarkInfoInputObject>;
};
export declare type CreateBrandEnrollmentRequest = {
    readonly __typename?: "CreateBrandEnrollmentRequest";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type CreateBulkOneoffAdminToolPayments = {
    readonly __typename?: "CreateBulkOneoffAdminToolPayments";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type CreateBulkOneoffAdminToolPaymentsInput = {
    readonly s3FileUrl: Scalars["String"];
};
export declare type CreateChargeTransactionInput = {
    readonly amount: CurrencyInput;
    readonly type: ChargeItemType;
    readonly redirectUrl?: Maybe<Scalars["String"]>;
    readonly flowType: ChargeTransactionType;
};
export declare type CreateChargeTransactionMutation = {
    readonly __typename?: "CreateChargeTransactionMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly chargeId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type CreateLqdCampaign = {
    readonly __typename?: "CreateLQDCampaign";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type CreateShippingPlan = {
    readonly __typename?: "CreateShippingPlan";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly shippingPlan?: Maybe<ShippingPlanSchema>;
};
export declare type CreateShippingProvider = {
    readonly __typename?: "CreateShippingProvider";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly shippingProvider?: Maybe<ShippingProviderSchema>;
};
export declare type CreateTakedownRequest = {
    readonly __typename?: "CreateTakedownRequest";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly takedownRequestId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type CreateTakedownRequestInput = {
    readonly brandPartnerBrandInfoId: Scalars["ObjectIdType"];
    readonly typeOfInfringement: TypeOfInfringement;
    readonly productIds: ReadonlyArray<Scalars["ObjectIdType"]>;
    readonly notes?: Maybe<Scalars["String"]>;
};
export declare type CreditPaymentType = "IMPRESSION_FEE" | "OTHER" | "ENROLLMENT_FEE";
export declare type CreditTransactionRecord = {
    readonly __typename?: "CreditTransactionRecord";
    readonly id: Scalars["ObjectIdType"];
    readonly dateCreated: Datetime;
    readonly updatedReason: CreditUpdateReason;
    readonly paymentType?: Maybe<CreditPaymentType>;
    readonly campaignId?: Maybe<Scalars["ObjectIdType"]>;
    readonly productId?: Maybe<Scalars["ObjectIdType"]>;
    readonly transactionAmount?: Maybe<CurrencyValue>;
    readonly expiredDate?: Maybe<Datetime>;
    readonly updateReasonDescription: Scalars["String"];
    readonly receiptId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type CreditUpdateReason = "REFUND" | "PAYMENT_BY_CREDITS" | "ISSUING_CREDITS";
export declare type CsvExportFilterType = "UNCONFIRMED_TRACKING" | "SHIPPED" | "NO_TRACKING" | "REFUNDED" | "REFUNDED_BY_WISH" | "FBW" | "FBS";
export declare type CsvFulfillmentErrorSchema = {
    readonly __typename?: "CsvFulfillmentErrorSchema";
    readonly message: Scalars["String"];
    readonly row: Scalars["String"];
    readonly orderId: Scalars["ObjectIdType"];
};
export declare type CsvFulfillmentJobSchema = {
    readonly __typename?: "CsvFulfillmentJobSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly csvUrl: Scalars["String"];
    readonly fulfilledCount: Scalars["Int"];
    readonly errorCount: Scalars["Int"];
    readonly totalRows: Scalars["Int"];
    readonly status: MerchantFeedJobStatus;
    readonly processedCount: Scalars["Int"];
    readonly startTime: Datetime;
    readonly fileName?: Maybe<Scalars["String"]>;
    readonly errors?: Maybe<ReadonlyArray<CsvFulfillmentErrorSchema>>;
};
export declare type CsvProductImportJobSchema = {
    readonly __typename?: "CSVProductImportJobSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly feedType: ProductCsvJobType;
    readonly startTime: Datetime;
    readonly status: MerchantFeedJobStatus;
    readonly totalRows: Scalars["Int"];
    readonly processedCount: Scalars["Int"];
    readonly errorCount: Scalars["Int"];
    readonly addedCount: Scalars["Int"];
    readonly updatedCount: Scalars["Int"];
    readonly csvUrl?: Maybe<Scalars["String"]>;
    readonly fileName?: Maybe<Scalars["String"]>;
};
export declare type CurrencyInput = {
    readonly amount: Scalars["Float"];
    readonly currencyCode: PaymentCurrencyCode;
};
export declare type CurrencyValue = {
    readonly __typename?: "CurrencyValue";
    readonly amount: Scalars["Float"];
    readonly currencyCode: Scalars["String"];
    readonly display: Scalars["String"];
    readonly convertedTo: CurrencyValue;
};
export declare type CurrencyValueConvertedToArgs = {
    currency: PaymentCurrencyCode;
    rate: ConversionRate;
};
export declare type CustomerIdentityInfo = {
    readonly __typename?: "CustomerIdentityInfo";
    readonly number: Scalars["String"];
    readonly numberName: Scalars["String"];
};
export declare type CustomerPaymentSchema = {
    readonly __typename?: "CustomerPaymentSchema";
    readonly id?: Maybe<Scalars["String"]>;
    readonly paymentProvider: TransactionPaymentType;
};
export declare type CustomerPriceSchema = {
    readonly __typename?: "CustomerPriceSchema";
    readonly unitPrice: CurrencyValue;
    readonly unitShipping: CurrencyValue;
    readonly credit?: Maybe<CurrencyValue>;
    readonly total: CurrencyValue;
};
export declare type CustomerPriceSchemaUnitPriceArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type CustomerPriceSchemaUnitShippingArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type CustomerPriceSchemaCreditArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type CustomerPriceSchemaTotalArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type CustomerSchema = {
    readonly __typename?: "CustomerSchema";
    readonly payment: CustomerPaymentSchema;
    readonly pricing: CustomerPriceSchema;
    readonly user?: Maybe<WishUserSchema>;
};
export declare type CustomerSupportConstants = {
    readonly __typename?: "CustomerSupportConstants";
    readonly issues: ReadonlyArray<CustomerSupportIssueType>;
};
export declare type CustomerSupportIssueType = {
    readonly __typename?: "CustomerSupportIssueType";
    readonly id: Scalars["Int"];
    readonly label: Scalars["String"];
};
export declare type CustomerSupportServiceSchema = {
    readonly __typename?: "CustomerSupportServiceSchema";
    readonly tickets: ReadonlyArray<CustomerSupportTicket>;
    readonly ticketCount: Scalars["Int"];
};
export declare type CustomerSupportServiceSchemaTicketsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<TicketSearchType>;
    sort?: Maybe<CustomerSupportTicketSort>;
    states?: Maybe<ReadonlyArray<CustomerSupportTicketState>>;
    issueTypes?: Maybe<ReadonlyArray<Scalars["Int"]>>;
    includeMissingTicketType?: Maybe<Scalars["Boolean"]>;
    types?: Maybe<ReadonlyArray<CustomerSupportTicketType>>;
};
export declare type CustomerSupportServiceSchemaTicketCountArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<TicketSearchType>;
    states?: Maybe<ReadonlyArray<CustomerSupportTicketState>>;
    issueTypes?: Maybe<ReadonlyArray<Scalars["Int"]>>;
    includeMissingTicketType?: Maybe<Scalars["Boolean"]>;
    types?: Maybe<ReadonlyArray<CustomerSupportTicketType>>;
};
export declare type CustomerSupportTicket = {
    readonly __typename?: "CustomerSupportTicket";
    readonly id: Scalars["ObjectIdType"];
    readonly state: CustomerSupportTicketState;
    readonly type?: Maybe<CustomerSupportTicketType>;
    readonly createdTime: Datetime;
    readonly lastUpdateTime?: Maybe<Datetime>;
    readonly user: WishUserSchema;
    readonly issueType?: Maybe<CustomerSupportIssueType>;
    readonly timeToRespond?: Maybe<Timedelta>;
};
export declare type CustomerSupportTicketSort = {
    readonly field: TicketSortFieldType;
    readonly order: SortOrderType;
};
export declare type CustomerSupportTicketState = "AWAITING_REFUND_CONFIRMATION" | "ADMIN" | "MANUAL_REFUND_CONFIRMATION" | "PERM_CLOSED" | "DELAYED" | "ESCALATED_TO_FRAUD_INTERNAL" | "REVIEW_MERCHANT_REPLY" | "AWAITING_USER" | "CLOSED" | "AWAITING_FRAUD" | "NEW" | "SUPER_ADMIN" | "AWAITING_SHIP_PROVIDER" | "AWAITING_MERCHANT" | "RETURN_AUTO_TICKET" | "ESCALATED_TO_INTERNAL";
export declare type CustomerSupportTicketType = "PRE_PURCHASE" | "POST_CUSTOMER_SUPPORT" | "NON_ORDER" | "ORDER";
export declare type Datetime = {
    readonly __typename?: "Datetime";
    readonly unix: Scalars["Int"];
    readonly formatted: Scalars["String"];
    readonly iso8061: Scalars["String"];
    readonly timeSince: Timedelta;
    readonly timeUntil: Timedelta;
    readonly hasPassed: Scalars["Boolean"];
    readonly mmddyyyy: Scalars["String"];
    readonly inTimezone: Datetime;
    readonly timezone: Scalars["String"];
};
export declare type DatetimeFormattedArgs = {
    fmt?: Maybe<Scalars["String"]>;
};
export declare type DatetimeInTimezoneArgs = {
    identifier: Scalars["String"];
};
export declare type DatetimeInput = {
    readonly unix?: Maybe<Scalars["Int"]>;
    readonly iso8061?: Maybe<Scalars["String"]>;
    readonly fmt?: Maybe<Scalars["String"]>;
    readonly formatted?: Maybe<Scalars["String"]>;
};
export declare type DeciderKeySchema = {
    readonly __typename?: "DeciderKeySchema";
    readonly decideForName: Scalars["Boolean"];
};
export declare type DeciderKeySchemaDecideForNameArgs = {
    name: Scalars["String"];
};
export declare type DefaultShippingInput = {
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly price: CurrencyInput;
};
export declare type DefaultShippingSchema = {
    readonly __typename?: "DefaultShippingSchema";
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly price: CurrencyValue;
    readonly timeToDoor?: Maybe<Scalars["Int"]>;
};
export declare type DeleteAllDevicesMutation = {
    readonly __typename?: "DeleteAllDevicesMutation";
    readonly deletedDeviceIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly deletedSessionIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type DeleteBrandEnrollment = {
    readonly __typename?: "DeleteBrandEnrollment";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type DeleteBrandEnrollmentInput = {
    readonly brandInfoId: Scalars["ObjectIdType"];
};
export declare type DeleteDeviceInput = {
    readonly deviceId: Scalars["ObjectIdType"];
};
export declare type DeleteDeviceMutation = {
    readonly __typename?: "DeleteDeviceMutation";
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type DeleteMerchantSenderAddressInput = {
    readonly merchantSenderAddressId: Scalars["ObjectIdType"];
};
export declare type DeleteMerchantSenderAddressMutation = {
    readonly __typename?: "DeleteMerchantSenderAddressMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type DeleteMerchantWarehouseInput = {
    readonly id: Scalars["ObjectIdType"];
};
export declare type DeleteMerchantWarehouseMutation = {
    readonly __typename?: "DeleteMerchantWarehouseMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type DeleteProductPostsInput = {
    readonly postIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
};
export declare type DeleteProductPostsMutation = {
    readonly __typename?: "DeleteProductPostsMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly errorCode?: Maybe<ProductPostErrorCode>;
};
export declare type DeleteWebhookSubscription = {
    readonly __typename?: "DeleteWebhookSubscription";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type DeleteWebhookSubscriptionInput = {
    readonly subscriptionId: Scalars["ObjectIdType"];
};
export declare type DeliveryCarrierUpsertInput = {
    readonly carrierId: Scalars["Int"];
    readonly countries: ReadonlyArray<CountryActionInput>;
    readonly extraCountryData?: Maybe<ExtraCountryDataInput>;
    readonly date: Scalars["String"];
    readonly reason?: Maybe<Scalars["String"]>;
};
export declare type DestinationShippingProfileInput = {
    readonly destination?: Maybe<Scalars["String"]>;
    readonly displayName?: Maybe<Scalars["String"]>;
    readonly rate?: Maybe<CurrencyInput>;
    readonly maxHoursToDoor?: Maybe<Scalars["Int"]>;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly shippingDetailsPerDestination?: Maybe<ReadonlyArray<DestinationShippingProfileInput>>;
};
export declare type DestinationShippingProfileSchema = {
    readonly __typename?: "DestinationShippingProfileSchema";
    readonly destination: Scalars["String"];
    readonly displayName: Scalars["String"];
    readonly rate: CurrencyValue;
    readonly maxHoursToDoor: Scalars["Int"];
    readonly enabled: Scalars["Boolean"];
    readonly shippingDetailsPerDestination?: Maybe<ReadonlyArray<DestinationShippingProfileSchema>>;
};
export declare type DetectionFactor = {
    readonly __typename?: "DetectionFactor";
    readonly factor: MerchantCountryDetectionFactorType;
    readonly detectedCountry?: Maybe<Country>;
};
export declare type DeviceSchema = {
    readonly __typename?: "DeviceSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly ip?: Maybe<Scalars["String"]>;
    readonly location?: Maybe<Scalars["String"]>;
    readonly lastUsed?: Maybe<Scalars["DateTime"]>;
    readonly firstUsed: Scalars["DateTime"];
    readonly deviceName?: Maybe<Scalars["String"]>;
    readonly userAgent?: Maybe<Scalars["String"]>;
    readonly status: DeviceStatus;
};
export declare type DeviceStatus = "CURRENT" | "ACTIVE" | "INACTIVE";
export declare type DisableBrandPartner = {
    readonly __typename?: "DisableBrandPartner";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type DisableBrandPartnerInput = {
    readonly brandPartnerId: Scalars["ObjectIdType"];
};
export declare type DisputeReason = "MISLEADING_PRODUCT_TAG" | "PRODUCT_HIGH_REFUND_RATIO" | "DELIVERED_TO_WRONG_ADDRESS" | "EPC_OVERWEIGHT" | "FRAUDULENT_BEHAVIOR" | "VALID_TRACKING" | "INCOMPLETE_ORDER" | "NOT_DELIVERED_ON_TIME" | "STORE_UPLOADED_INVENTORY_RETURN" | "PRODUCT_LOW_RATING" | "RIGHT_OF_WITHDRAWAL" | "FBS_ITEM_NOT_PICKUP" | "CORRECT_SIZE" | "ITEM_IS_DAMAGED" | "MERCHANT_REPORT_RETURN" | "EPC_OVERVALUE" | "RETURNED_TO_SENDER" | "ITEM_NOT_MATCH_LISTING" | "WISHBLUE_EPC_LATE_FULFULLMENT" | "OUT_OF_STOCK" | "ITEM_MARKED_DELIVERED_BUT_DID_NOT_ARRIVE" | "FAKE_TRACKING" | "MERCHANT_HIGH_REFUND_EAT_COST" | "ITEM_IS_DANGEROUS" | "BANNED_MERCHANT" | "NOT_QUALIFIED_SHIPPING_PROVIDER" | "AUTHORIZED_TO_SELL" | "EPC_LAST_MILE_CARRIERS_UNABLE_TO_SHIP" | "EPC_OVERSIZE" | "COUNTERFEIT_ITEM" | "DID_NOT_ACCEPT_TOS_ON_TIME" | "LATE_CONFIRMED_FULFILLMENT" | "MERCHANT_REPORT_FRAUD";
export declare type DisputeReasonSchema = {
    readonly __typename?: "DisputeReasonSchema";
    readonly reason: DisputeReason;
    readonly text?: Maybe<Scalars["String"]>;
    readonly subReason?: Maybe<DisputeSubReason>;
    readonly subReasonText?: Maybe<Scalars["String"]>;
};
export declare type DisputeSchema = {
    readonly __typename?: "DisputeSchema";
    readonly refundDispute?: Maybe<RefundDisputeHub>;
    readonly trackingDispute?: Maybe<TrackingDisputeHub>;
};
export declare type DisputeSort = {
    readonly field: DisputeSortFieldType;
    readonly order: SortOrderType;
};
export declare type DisputeSortFieldType = "DisputeID" | "LastUpdate";
export declare type DisputeState = "INVALID" | "AWAITING_ADMIN" | "PAID" | "CLOSED" | "CANCELLED" | "NEW" | "AWAITING_MERCHANT" | "APPROVED";
export declare type DisputeSubReason = "INCOMPLETE_ITEM" | "DID_NOT_RECEIVE_ITEM" | "INCORRECT_ITEM";
export declare type DomesticShippingInput = {
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly price?: Maybe<CurrencyInput>;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
};
export declare type DomesticShippingSchema = {
    readonly __typename?: "DomesticShippingSchema";
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly price: CurrencyValue;
    readonly enabled: Scalars["Boolean"];
    readonly priceEstimate: CurrencyValue;
};
export declare type DownloadAllProductsCsv = {
    readonly __typename?: "DownloadAllProductsCSV";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type DownloadAllProductsCsvInput = {
    readonly includeRejected?: Maybe<Scalars["Boolean"]>;
    readonly warehouseId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type DownloadEuComplianceProductLinks = {
    readonly __typename?: "DownloadEUComplianceProductLinks";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type EditAddressInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly address: AddressInput;
};
export declare type EditOriginAddresses = {
    readonly __typename?: "EditOriginAddresses";
    readonly updatedCount: Scalars["Int"];
    readonly errorMessages?: Maybe<ReadonlyArray<AddressUpdateError>>;
};
export declare type EditShippingAddresses = {
    readonly __typename?: "EditShippingAddresses";
    readonly updatedCount: Scalars["Int"];
    readonly errorMessages?: Maybe<ReadonlyArray<AddressUpdateError>>;
};
export declare type EditTrademarkInput = {
    readonly id: Scalars["ObjectIdType"];
    readonly location: BrandPartnerCountryAndRegionCode;
    readonly type: BrandPartnerTrademarkType;
    readonly registrationNumber: Scalars["String"];
    readonly registrationUrl?: Maybe<Scalars["String"]>;
    readonly registrationDocs?: Maybe<ReadonlyArray<FileInput>>;
};
export declare type EditTrademarksAndBrandInfo = {
    readonly __typename?: "EditTrademarksAndBrandInfo";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type EditTrademarksAndBrandInfoInput = {
    readonly brandInfoId: Scalars["ObjectIdType"];
    readonly brandOwnerName?: Maybe<Scalars["String"]>;
    readonly proofOfAuthorizations?: Maybe<ReadonlyArray<FileInput>>;
    readonly brandRepName?: Maybe<Scalars["String"]>;
    readonly brandRepTitle?: Maybe<Scalars["String"]>;
    readonly email?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly proposedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly providedBrandName: Scalars["String"];
    readonly isNewBrand: Scalars["Boolean"];
    readonly providedBrandWebsite?: Maybe<Scalars["String"]>;
    readonly providedBrandLogoFile?: Maybe<FileInput>;
    readonly providedBrandAdditionalInfo?: Maybe<Scalars["String"]>;
    readonly trademarks: ReadonlyArray<EditTrademarkInput>;
};
export declare type EuComplianceAddressInput = {
    readonly name: Scalars["String"];
    readonly streetAddress1: Scalars["String"];
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly streetAddress3?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly county?: Maybe<Scalars["String"]>;
    readonly state: Scalars["String"];
    readonly neighborhood?: Maybe<Scalars["String"]>;
    readonly region?: Maybe<Scalars["String"]>;
    readonly countryCode?: Maybe<EuComplianceResponsiblePersonCountriesAndRegionsCode>;
    readonly zipcode?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
};
export declare type EuComplianceMutations = {
    readonly __typename?: "EUComplianceMutations";
    readonly downloadProductLinks?: Maybe<DownloadEuComplianceProductLinks>;
    readonly upsertLink?: Maybe<UpsertLinkProductCompliance>;
    readonly upsertResponsiblePerson?: Maybe<UpsertResponsiblePerson>;
};
export declare type EuComplianceMutationsUpsertLinkArgs = {
    input?: Maybe<LinkProductComplianceUpsertInput>;
};
export declare type EuComplianceMutationsUpsertResponsiblePersonArgs = {
    input?: Maybe<ResponsiblePersonUpsertInput>;
};
export declare type EuComplianceResponsiblePersonCountriesAndRegions = {
    readonly __typename?: "EUComplianceResponsiblePersonCountriesAndRegions";
    readonly code: EuComplianceResponsiblePersonCountriesAndRegionsCode;
    readonly name: Scalars["String"];
};
export declare type EuComplianceResponsiblePersonCountriesAndRegionsCode = "BE" | "FR" | "BG" | "DK" | "HR" | "IS" | "DE" | "IT" | "HU" | "CZ" | "CY" | "AT" | "FI" | "NIE" | "IE" | "ES" | "GR" | "SK" | "NL" | "PT" | "NO" | "SI" | "LI" | "LV" | "EE" | "LT" | "LU" | "SE" | "MT" | "RO" | "PL";
export declare type EuvatRegistrationFieldsInput = {
    readonly vatNumber: Scalars["String"];
    readonly countryCode: CountryCode;
};
export declare type EuvatSchema = {
    readonly __typename?: "EUVATSchema";
    readonly invoiceAmount?: Maybe<CurrencyValue>;
    readonly shippingPrice?: Maybe<CurrencyValue>;
};
export declare type EuvatSchemaInvoiceAmountArgs = {
    inAuthorityCurrency?: Maybe<Scalars["Boolean"]>;
};
export declare type EuvatSchemaShippingPriceArgs = {
    inAuthorityCurrency?: Maybe<Scalars["Boolean"]>;
};
export declare type EuvatTaxMutations = {
    readonly __typename?: "EUVATTaxMutations";
    readonly uploadVatTaxQuestionnaire?: Maybe<UploadEuvatTaxQuestionnaire>;
};
export declare type EuvatTaxMutationsUploadVatTaxQuestionnaireArgs = {
    input: EuvatTaxQuestionnaireInput;
};
export declare type EuvatTaxQuestionnaireAddressInput = {
    readonly address: Scalars["String"];
    readonly zipcode: Scalars["String"];
    readonly city: Scalars["String"];
    readonly state: Scalars["String"];
    readonly countryCode: CountryCode;
};
export declare type EuvatTaxQuestionnaireInput = {
    readonly employPersonnelInEu?: Maybe<Scalars["Boolean"]>;
    readonly businessAddressInEu?: Maybe<Scalars["Boolean"]>;
    readonly businessAddress?: Maybe<EuvatTaxQuestionnaireAddressInput>;
    readonly subjectToTaxInEu?: Maybe<Scalars["Boolean"]>;
    readonly fileUrl?: Maybe<Scalars["String"]>;
    readonly registeredWithTradeRegistryInEu?: Maybe<Scalars["Boolean"]>;
    readonly euVatRegistration?: Maybe<EuvatRegistrationFieldsInput>;
    readonly businessRegistrationNumber?: Maybe<Scalars["String"]>;
};
export declare type EuvatTaxSchema = {
    readonly __typename?: "EUVATTaxSchema";
    readonly euVatSelfRemittanceEligible?: Maybe<Scalars["Boolean"]>;
    readonly euVatEntityStatus?: Maybe<CommerceMerchantEuEntityStatus>;
};
export declare type ExistingSellingLocations = "NONE" | "RETAIL" | "ONLINE_AND_RETAIL" | "ONLINE";
export declare type ExpSchema = {
    readonly __typename?: "ExpSchema";
    readonly bucket: Scalars["String"];
};
export declare type ExpSchemaBucketArgs = {
    name: Scalars["String"];
};
export declare type ExternalBoostAttributedStats = {
    readonly __typename?: "ExternalBoostAttributedStats";
    readonly orders: Scalars["Int"];
    readonly gmv: CurrencyValue;
};
export declare type ExternalBoostChargingMethod = "CPA" | "CPC";
export declare type ExtraCountryDataInput = {
    readonly swedenDeliveredCarrierTypes: ReadonlyArray<SwedenDeliveredCarrierType>;
};
export declare type FactoryMerchantConversionInput = {
    readonly userId: Scalars["String"];
};
export declare type FactoryToMerchantConversionMutation = {
    readonly __typename?: "FactoryToMerchantConversionMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly ok: Scalars["Boolean"];
};
export declare type FactoryUserMutations = {
    readonly __typename?: "FactoryUserMutations";
    readonly convertMerchantToFactory: MerchantToFactoryConversionMutation;
    readonly convertFactoryToMerchant: FactoryToMerchantConversionMutation;
};
export declare type FactoryUserMutationsConvertMerchantToFactoryArgs = {
    input: FactoryMerchantConversionInput;
};
export declare type FactoryUserMutationsConvertFactoryToMerchantArgs = {
    input: FactoryMerchantConversionInput;
};
export declare type FbwInventorySchema = {
    readonly __typename?: "FBWInventorySchema";
    readonly warehouse: FbwWarehouseSchema;
    readonly shippingType: WarehouseShippingType;
    readonly activeInventory: Scalars["Int"];
    readonly pendingInventory: Scalars["Int"];
};
export declare type FbwRegion = "EU" | "CN" | "US" | "EU_UNBONDED";
export declare type FbwWarehouseSchema = {
    readonly __typename?: "FBWWarehouseSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly code: Scalars["String"];
    readonly region: FbwRegion;
    readonly address: AddressSchema;
    readonly estimatedFulfillTime: Timedelta;
    readonly maxWeight: Weight;
    readonly name: Scalars["String"];
    readonly feeLink: Scalars["String"];
};
export declare type FileInput = {
    readonly url: Scalars["String"];
    readonly fileName: Scalars["String"];
};
export declare type FinalSaleCategory = "HOUSEHOLD_SUPPLIES" | "ADULT_TOYS" | "PLANT_AND_PLANT_SEEDS" | "FOOD_AND_BEVERAGES" | "VITAMINS_AND_SUPPLEMENTS" | "PET_FOOD" | "OTC_MEDICATION" | "MAKEUP_AND_BEAUTY";
export declare type FinalSaleCategorySchema = {
    readonly __typename?: "FinalSaleCategorySchema";
    readonly category: FinalSaleCategory;
    readonly name: Scalars["String"];
    readonly description: Scalars["String"];
    readonly totalProducts: Scalars["Int"];
    readonly finalSaleEnabled: Scalars["Boolean"];
};
export declare type FineReason = "EARLY_PAYMENT_DEDUCTION" | "PROMOTION_FEE" | "UNREASONABLE_PRICE_GAUGE" | "PRODUCT_LISTING_FEE" | "MERCHANT_CANCELLATION" | "FAKE_RATING" | "LEGAL_SETTLEMENT_RESERVED" | "INVALID_EU_RESPONSIBLE_PERSON" | "B2B_SALE_FEE" | "POLICY_VIOLATION" | "STORE_PAYMENT_DEDUCTION" | "CN_PROHIBITED_PRODUCTS" | "IP_INFRINGEMENT" | "LEGAL_SETTLEMENT_PAID" | "WITHHOLD_FUND" | "ONEOFF_FEE" | "UNFULFILLED_ORDER" | "MERCHANT_HARASSMENT" | "LOGISTIC_FEE" | "ONEOFF" | "PROHIBITED_PRODUCT_FINE" | "WISH_EXPRESS_VIOLATION" | "COLLECTIONS_BOOST_CAMPAIGN_FEE" | "RETURN_LABEL_FEE" | "EXTERNAL_BOOST_FEE" | "LEGAL_SETTLEMENT" | "WISH_PARCEL_SERVICE_ADJUST_FEE" | "WISHPOST_ADJUSTMENT_DEDUCTION" | "MERCHANT_INCENTIVE" | "FBW_FEE" | "PROMOTED_PRODUCT_DISABLE_FINE" | "MISLEADING_VARIATION" | "FAKE_TRACKING" | "UNCONFIRMED_CARRIER" | "DEP_INFRACTION" | "STORE_PAYMENT_CANCELLATION" | "WISH_EXPRESS_WITHHELD_ORDER" | "SE_CASH_BACK" | "EXTERNAL_BOOST_CPA_FEE" | "QUALITY_REFUND_FINE" | "PAID_PLACEMENT_IMPRESSION_FEE" | "CN_ORDER_NOT_SHIP_WITH_WISHPOST" | "LCL_FBW_FEE" | "CONSOLIDATE_MP_FINE" | "REPEAT_IP_INFRINGEMENT" | "WISH_PARCEL_SERVICE_FEE" | "DECEPTIVE_FULFILLMENT" | "MISLEADING_LISTING" | "MISLEADING_LISTING_AUTHENTIC_BRAND" | "LATE_CONFIRMED_FULFILLMENT" | "PAID_PLACEMENT_ENROLLMENT_FEE" | "PRODUCT_SWAPPED";
export declare type FlexibleBudgetSchema = {
    readonly __typename?: "FlexibleBudgetSchema";
    readonly enabled: Scalars["Boolean"];
    readonly type: MarketingFlexibleBudgetType;
};
export declare type FulfilledByWishMutations = {
    readonly __typename?: "FulfilledByWishMutations";
    readonly createShippingPlan?: Maybe<CreateShippingPlan>;
};
export declare type FulfilledByWishMutationsCreateShippingPlanArgs = {
    input: ShippingPlanInput;
};
export declare type FulfilledByWishSchema = {
    readonly __typename?: "FulfilledByWishSchema";
    readonly lowInventoryCount?: Maybe<Scalars["Int"]>;
    readonly actionRequiredShippingPlans?: Maybe<Scalars["Int"]>;
    readonly totalActionRequired?: Maybe<Scalars["Int"]>;
};
export declare type FulfillmentCsvSchema = {
    readonly __typename?: "FulfillmentCSVSchema";
    readonly requiredColumns: ReadonlyArray<OrderCsvColumnSchema>;
    readonly optionalColumns: ReadonlyArray<OrderCsvColumnSchema>;
};
export declare type FulfillmentError = {
    readonly __typename?: "FulfillmentError";
    readonly orderId: Scalars["ObjectIdType"];
    readonly message: Scalars["String"];
};
export declare type FulfillmentExtensionSurveyOption = "OTHER" | "NOT_ENOUGH_WORKERS" | "TROUBLE_SHIPPING" | "NOT_ENOUGH_INVENTORY";
export declare type FulfillmentExtensionSurveyOptionSchema = {
    readonly __typename?: "FulfillmentExtensionSurveyOptionSchema";
    readonly name: FulfillmentExtensionSurveyOption;
    readonly display: Scalars["String"];
};
export declare type FulfillmentMutation = {
    readonly __typename?: "FulfillmentMutation";
    readonly refundOrders: RefundOrders;
    readonly fulfillOrders: FulfillOrders;
    readonly modifyTrackingOrders: ModifyTrackingOrders;
    readonly editShippingAddresses: EditShippingAddresses;
    readonly editOriginAddresses: EditOriginAddresses;
    readonly fulfillOrdersFromCsv: FulfillmentOrdersFromCsv;
    readonly updateDeliveryConfirmation: UpdateOrderDeliveryConfirmation;
    readonly actionRequiredOrdersCsvDownload: ActionRequiredOrdersCsvDownload;
    readonly ordersCsvDownload: OrdersCsvDownload;
    readonly setMerchantFulfillmentExtension: SetMerchantFulfillmentExtension;
    readonly selectWpsShippingOption: SelectWpsShippingOptionMutation;
    readonly modifyWpsTrackingId: ModifyWpsTrackingIdMutation;
    readonly cancelWpsTrackingId: CancelWpsTrackingIdMutation;
    readonly setWpsPackageType: SetWpsPackageTypeMutation;
    readonly generateTestOrders?: Maybe<GenerateTestOrders>;
};
export declare type FulfillmentMutationRefundOrdersArgs = {
    input: ReadonlyArray<RefundOrderInput>;
};
export declare type FulfillmentMutationFulfillOrdersArgs = {
    input: ReadonlyArray<FulfillOrderInput>;
};
export declare type FulfillmentMutationModifyTrackingOrdersArgs = {
    input: ReadonlyArray<ModifyTrackingOrderInput>;
};
export declare type FulfillmentMutationEditShippingAddressesArgs = {
    input: ReadonlyArray<EditAddressInput>;
};
export declare type FulfillmentMutationEditOriginAddressesArgs = {
    input: ReadonlyArray<EditAddressInput>;
};
export declare type FulfillmentMutationFulfillOrdersFromCsvArgs = {
    input: FulfillmentOrdersFromCsvInput;
};
export declare type FulfillmentMutationUpdateDeliveryConfirmationArgs = {
    input: UpdateOrderDeliveryConfirmationInput;
};
export declare type FulfillmentMutationActionRequiredOrdersCsvDownloadArgs = {
    input: ActionRequiredOrdersCsvDownloadInput;
};
export declare type FulfillmentMutationOrdersCsvDownloadArgs = {
    input: OrdersCsvDownloadInput;
};
export declare type FulfillmentMutationSetMerchantFulfillmentExtensionArgs = {
    input: SetMerchantFulfillmentExtensionInput;
};
export declare type FulfillmentMutationSelectWpsShippingOptionArgs = {
    input: SelectWpsShippingOptionInput;
};
export declare type FulfillmentMutationModifyWpsTrackingIdArgs = {
    input: ModifyWpsTrackingIdInput;
};
export declare type FulfillmentMutationCancelWpsTrackingIdArgs = {
    input: CancelWpsTrackingIdInput;
};
export declare type FulfillmentMutationSetWpsPackageTypeArgs = {
    input: SetWpsPackageTypeInput;
};
export declare type FulfillmentMutationGenerateTestOrdersArgs = {
    input: GenerateTestOrdersInput;
};
export declare type FulfillmentOrdersFromCsv = {
    readonly __typename?: "FulfillmentOrdersFromCsv";
    readonly jobUrl?: Maybe<Scalars["String"]>;
    readonly status?: Maybe<MerchantFeedJobStatus>;
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type FulfillmentOrdersFromCsvInput = {
    readonly fileUrl: Scalars["String"];
    readonly csvDelimiter: Scalars["String"];
    readonly columnIdList: ReadonlyArray<Scalars["String"]>;
};
export declare type FulfillmentSchema = {
    readonly __typename?: "FulfillmentSchema";
    readonly order?: Maybe<OrderSchema>;
    readonly orders?: Maybe<ReadonlyArray<OrderSchema>>;
    readonly ordersCsvUrl?: Maybe<Scalars["String"]>;
    readonly actionRequiredOrdersCsvUrl?: Maybe<Scalars["String"]>;
    readonly csvFulfillmentJobsCount?: Maybe<Scalars["Int"]>;
    readonly ordersCount?: Maybe<Scalars["Int"]>;
    readonly actionRequiredOrders?: Maybe<ReadonlyArray<OrderSchema>>;
    readonly actionRequiredOrderCount?: Maybe<Scalars["Int"]>;
    readonly fulfillmentCsv?: Maybe<FulfillmentCsvSchema>;
    readonly bulkJobs?: Maybe<ReadonlyArray<CsvFulfillmentJobSchema>>;
    readonly wpsShippingOptions?: Maybe<WpsGetShippingOptionsSchema>;
};
export declare type FulfillmentSchemaOrderArgs = {
    id: Scalars["String"];
};
export declare type FulfillmentSchemaOrdersArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<OrderHistorySearchType>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<OrderHistorySort>;
    states?: Maybe<ReadonlyArray<CommerceTransactionState>>;
    wishExpress?: Maybe<Scalars["Boolean"]>;
};
export declare type FulfillmentSchemaOrdersCsvUrlArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<OrderHistorySearchType>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<OrderHistorySort>;
    wishExpress?: Maybe<Scalars["Boolean"]>;
};
export declare type FulfillmentSchemaActionRequiredOrdersCsvUrlArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ActionRequiredSearchType>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<ActionRequiredSort>;
    wishExpress?: Maybe<Scalars["Boolean"]>;
};
export declare type FulfillmentSchemaOrdersCountArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<OrderHistorySearchType>;
    states?: Maybe<ReadonlyArray<CommerceTransactionState>>;
    wishExpress?: Maybe<Scalars["Boolean"]>;
};
export declare type FulfillmentSchemaActionRequiredOrdersArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ActionRequiredSearchType>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<ActionRequiredSort>;
    wishExpress?: Maybe<Scalars["Boolean"]>;
};
export declare type FulfillmentSchemaActionRequiredOrderCountArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ActionRequiredSearchType>;
    wishExpress?: Maybe<Scalars["Boolean"]>;
};
export declare type FulfillmentSchemaBulkJobsArgs = {
    offset?: Scalars["Int"];
    limit?: Scalars["Int"];
};
export declare type FulfillmentSchemaWpsShippingOptionsArgs = {
    orderId: Scalars["String"];
};
export declare type FulfillOrderInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly trackingId: Scalars["String"];
    readonly providerId: Scalars["Int"];
    readonly shipNote?: Maybe<Scalars["String"]>;
    readonly originCountryCode: CountryCode;
};
export declare type FulfillOrders = {
    readonly __typename?: "FulfillOrders";
    readonly shippedCount: Scalars["Int"];
    readonly reusedTracking: Scalars["Boolean"];
    readonly errorMessages?: Maybe<ReadonlyArray<FulfillmentError>>;
};
export declare type Gender = "UNKNOWN" | "MALE" | "FEMALE" | "NEUTRAL";
export declare type GeneralTaggingManagement = {
    readonly __typename?: "GeneralTaggingManagement";
    readonly localToLocalAllowedSubcategories?: Maybe<ReadonlyArray<TaggingViolationSubcategory>>;
};
export declare type GenerateTestOrders = {
    readonly __typename?: "GenerateTestOrders";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type GenerateTestOrdersInput = {
    readonly productId?: Maybe<Scalars["ObjectIdType"]>;
    readonly variationId?: Maybe<Scalars["ObjectIdType"]>;
    readonly quantity?: Maybe<Scalars["Int"]>;
    readonly logisticsOption: GenerateTestOrdersLogisticsOptions;
    readonly country?: Maybe<CountryCode>;
    readonly state?: Maybe<Scalars["String"]>;
    readonly zipcode?: Maybe<Scalars["String"]>;
};
export declare type GenerateTestOrdersLogisticsOptions = "RANDOM" | "WISH_EXPRESS" | "LESS_THAN_TRUCKLOAD" | "ADVANCED_LOGISTICS" | "OPTIONAL_ADVANCED_LOGISTICS" | "CONFIRMED_DELIVERY_POLICY" | "UNIFICATION_INITIATIVE" | "NONE";
export declare type GenerateVideoInput = {
    readonly slides?: Maybe<ReadonlyArray<VideoSlideSpec>>;
};
export declare type GenerateVideoMutation = {
    readonly __typename?: "GenerateVideoMutation";
    readonly ok?: Maybe<Scalars["Boolean"]>;
    readonly videoUrl?: Maybe<Scalars["String"]>;
};
export declare type GenWechatQrInput = {
    readonly scene?: Maybe<Scalars["String"]>;
};
export declare type GenWechatQrMutation = {
    readonly __typename?: "GenWechatQrMutation";
    readonly ticket?: Maybe<Scalars["String"]>;
};
export declare type GeoCoordinates = {
    readonly __typename?: "GeoCoordinates";
    readonly latitude: Scalars["String"];
    readonly longitude: Scalars["String"];
};
export declare type GoogleLoginDetails = {
    readonly __typename?: "GoogleLoginDetails";
    readonly authUrl: Scalars["String"];
};
export declare type GtinProductSchema = {
    readonly __typename?: "GtinProductSchema";
    readonly gtins: ReadonlyArray<Scalars["String"]>;
    readonly gtinFormats?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly asin?: Maybe<Scalars["String"]>;
    readonly title?: Maybe<Scalars["String"]>;
    readonly categories?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly brand?: Maybe<Scalars["String"]>;
    readonly wishBrand?: Maybe<BrandSchema>;
    readonly description?: Maybe<Scalars["String"]>;
    readonly features?: Maybe<Scalars["String"]>;
    readonly imageUrls?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly variations?: Maybe<ReadonlyArray<GtinVariationSchema>>;
};
export declare type GtinProductServiceSchema = {
    readonly __typename?: "GtinProductServiceSchema";
    readonly product?: Maybe<GtinProductSchema>;
};
export declare type GtinProductServiceSchemaProductArgs = {
    gtins: ReadonlyArray<Scalars["String"]>;
};
export declare type GtinVariationSchema = {
    readonly __typename?: "GtinVariationSchema";
    readonly gtin: Scalars["String"];
    readonly mpn?: Maybe<Scalars["String"]>;
    readonly model?: Maybe<Scalars["String"]>;
    readonly manufacturer?: Maybe<Scalars["String"]>;
    readonly ageGroup?: Maybe<Scalars["String"]>;
    readonly ingredients?: Maybe<Scalars["String"]>;
    readonly nutritionFacts?: Maybe<Scalars["String"]>;
    readonly energyEfficiencyClass?: Maybe<Scalars["String"]>;
    readonly color?: Maybe<Scalars["String"]>;
    readonly gender?: Maybe<Scalars["String"]>;
    readonly material?: Maybe<Scalars["String"]>;
    readonly pattern?: Maybe<Scalars["String"]>;
    readonly format?: Maybe<Scalars["String"]>;
    readonly multipack?: Maybe<Scalars["String"]>;
    readonly size?: Maybe<Scalars["String"]>;
    readonly length?: Maybe<Length>;
    readonly width?: Maybe<Length>;
    readonly height?: Maybe<Length>;
    readonly weight?: Maybe<Weight>;
    readonly imageUrls?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly price?: Maybe<CurrencyValue>;
};
export declare type IdDetails = {
    readonly __typename?: "IdDetails";
    readonly id: Scalars["String"];
    readonly linkType: RedirectLinkType;
    readonly redirectUrl?: Maybe<Scalars["String"]>;
};
export declare type IdentityMutations = {
    readonly __typename?: "IdentityMutations";
    readonly updatePermission?: Maybe<UpdatePermissionMutation>;
    readonly updateRole?: Maybe<UpdateRoleMutation>;
    readonly updateUserInfo?: Maybe<UpdateUserInfoMutation>;
    readonly updateQueue?: Maybe<UpdateUserQueuesMutation>;
    readonly factoryMutations?: Maybe<FactoryUserMutations>;
};
export declare type IdentityMutationsUpdatePermissionArgs = {
    input: UpdatePermissionInput;
};
export declare type IdentityMutationsUpdateRoleArgs = {
    input: UpdateRoleInput;
};
export declare type IdentityMutationsUpdateUserInfoArgs = {
    input: UpdateUserInfoInput;
};
export declare type IdentityMutationsUpdateQueueArgs = {
    input: UpdateUserQueuesInput;
};
export declare type IdentityServiceSchema = {
    readonly __typename?: "IdentityServiceSchema";
    readonly user?: Maybe<UserSchema>;
    readonly platformRoles: ReadonlyArray<RoleSchema>;
    readonly users?: Maybe<ReadonlyArray<UserSchema>>;
    readonly usersCount?: Maybe<Scalars["Int"]>;
    readonly visibleRoles: ReadonlyArray<RoleSchema>;
    readonly platformBdMerchantCountries: ReadonlyArray<BdMerchantCountryCodeType>;
};
export declare type IdentityServiceSchemaUserArgs = {
    id: Scalars["String"];
};
export declare type IdentityServiceSchemaUsersArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    query?: Maybe<Scalars["String"]>;
    sortField?: Maybe<UsersSortFieldType>;
    sortOrder?: Maybe<SortOrderType>;
    includeDisabledUsers?: Maybe<Scalars["Boolean"]>;
    roles?: Maybe<ReadonlyArray<RoleType>>;
};
export declare type IdentityServiceSchemaUsersCountArgs = {
    query?: Maybe<Scalars["String"]>;
    includeDisabledUsers?: Maybe<Scalars["Boolean"]>;
    roles?: Maybe<ReadonlyArray<RoleType>>;
};
export declare type ImageInput = {
    readonly id?: Maybe<Scalars["Int"]>;
    readonly url: Scalars["String"];
    readonly isCleanImage?: Maybe<Scalars["Boolean"]>;
};
export declare type ImageSchema = {
    readonly __typename?: "ImageSchema";
    readonly id: Scalars["Int"];
    readonly wishUrl: Scalars["String"];
    readonly isCleanImage: Scalars["Boolean"];
};
export declare type InfoCollectedForPaymentProvider = {
    readonly __typename?: "InfoCollectedForPaymentProvider";
    readonly email?: Maybe<Scalars["String"]>;
};
export declare type InitiateUploadInput = {
    readonly bucket: ClientWritableBucket;
    readonly filename?: Maybe<Scalars["String"]>;
    readonly contentType: Scalars["String"];
};
export declare type InitiateUploadMutation = {
    readonly __typename?: "InitiateUploadMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly uploadUrl?: Maybe<Scalars["String"]>;
    readonly uploadHeaders?: Maybe<Scalars["JSONString"]>;
    readonly downloadUrl?: Maybe<Scalars["String"]>;
};
export declare type InventoryInput = {
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly count: Scalars["Int"];
};
export declare type InventorySchema = {
    readonly __typename?: "InventorySchema";
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly shippingType: WarehouseShippingType;
    readonly count: Scalars["Int"];
};
export declare type IpViolationBrandCategory = {
    readonly __typename?: "IPViolationBrandCategory";
    readonly category: BrandCategoryCode;
    readonly displayName: Scalars["String"];
};
export declare type IpViolationTaggingManagement = {
    readonly __typename?: "IPViolationTaggingManagement";
    readonly ipViolationReasons: ReadonlyArray<TaggingViolationReason>;
    readonly brandCategories: ReadonlyArray<IpViolationBrandCategory>;
    readonly taggableBrands: ReadonlyArray<BrandSchema>;
};
export declare type IsRequiredEnum = "NOT_INCLUDED" | "OPTIONAL" | "REQUIRED";
export declare type KycMerchantType = "NOT_SET" | "COMPANY" | "INDIVIDUAL";
export declare type KycProfilePaymentStatus = "PAYMENT_ALLOWED" | "PAYMENT_HELD" | "PAYMENT_HOLD_PROPOSED";
export declare type KycProfileVerificationAdminStatus = "NOT_SET" | "IN_PROGRESS" | "REJECTED" | "APPROVED" | "ON_HOLD";
export declare type KycProfileVerificationRiskScore = "HIGH" | "NOT_SET" | "VERY_HIGH" | "MEDIUM" | "LOW";
export declare type KycProfileVerificationStatus = "REJECTED" | "COMPLETE" | "INCOMPLETE";
export declare type KycVerificationSchema = {
    readonly __typename?: "KycVerificationSchema";
    readonly status?: Maybe<KycProfileVerificationStatus>;
    readonly paymentStatus?: Maybe<KycProfilePaymentStatus>;
    readonly adminStatus?: Maybe<KycProfileVerificationAdminStatus>;
    readonly riskScore?: Maybe<KycProfileVerificationRiskScore>;
    readonly merchantType?: Maybe<KycMerchantType>;
    readonly isMandatory?: Maybe<Scalars["Boolean"]>;
    readonly canStart: Scalars["Boolean"];
};
export declare type LateDeliverySchema = {
    readonly __typename?: "LateDeliverySchema";
    readonly lateDeliveryRate?: Maybe<Scalars["Float"]>;
    readonly lateDeliveryThreshhold?: Maybe<Scalars["Float"]>;
};
export declare type LedgerAccountBalance = {
    readonly __typename?: "LedgerAccountBalance";
    readonly amount: Scalars["Float"];
    readonly currency: PaymentCurrencyCode;
    readonly balanceType: LedgerAccountBalanceType;
};
export declare type LedgerAccountBalanceType = "CONFIRMED" | "PENDING";
export declare type LedgerItem = {
    readonly __typename?: "LedgerItem";
    readonly createdTime: Datetime;
    readonly description: LedgerItemDescriptionDetails;
    readonly creditAmount?: Maybe<CurrencyValue>;
    readonly debitAmount?: Maybe<CurrencyValue>;
    readonly type: LedgerLineItemType;
};
export declare type LedgerItemDescriptionDetails = {
    readonly __typename?: "LedgerItemDescriptionDetails";
    readonly descriptionText: Scalars["String"];
    readonly idDetailList?: Maybe<ReadonlyArray<IdDetails>>;
};
export declare type LedgerItemInfo = {
    readonly __typename?: "LedgerItemInfo";
    readonly itemCount?: Maybe<Scalars["Int"]>;
    readonly itemList?: Maybe<ReadonlyArray<LedgerItem>>;
    readonly nextCutoffTime?: Maybe<Datetime>;
    readonly nextCutoffId?: Maybe<Scalars["String"]>;
};
export declare type LedgerLineItemType = "ORDER" | "REFUND" | "REBATE" | "REBATE_CANCEL" | "INITIAL_WP_SHIPPING" | "INITIAL_WP_SHIPPING_OFFSET" | "INITIAL_WP_SHIPPING_REFUND" | "ESTIMATED_WP_SHIPPING" | "ESTIMATED_WP_SHIPPING_REFUND" | "TAX_ADJUSTMENT" | "INITIAL_WP_SHIPPING_REFUND_OFFSET" | "TAX" | "TAX_REFUND" | "FINE_DEDUCTION" | "FINE_REVERSAL" | "FEE_DEDUCTION" | "FEE_REVERSAL" | "ONEOFF_PAYMENT" | "ONEOFF_PAYMENT_CANCELLATION" | "PAYMENT" | "CONSOLIDATION";
export declare type LegacyRefundSource = "MERCHANT" | "USER_CANCEL" | "WISH_ADMIN_MERCHANT_EATS_COST" | "WISH_ADMIN_BOTH_EAT_COST" | "WISH_ADMIN_WISH_EATS_COST" | "AUTO_LATE_FULFILL";
export declare type Length = {
    readonly __typename?: "Length";
    readonly value: Scalars["Float"];
    readonly unit: LengthUnit;
};
export declare type LengthValueArgs = {
    targetUnit?: Maybe<LengthUnit>;
};
export declare type LengthInput = {
    readonly value: Scalars["Float"];
    readonly unit: LengthUnit;
};
export declare type LengthUnit = "METER" | "CENTIMETER" | "INCH" | "FEET" | "YARD";
export declare type LineItemSearchType = "CTXN_REFUND_ITEM_ID" | "MERCHANT_ONEOFF_PAYMENT_ID" | "FINE_ID" | "ORDER_ID" | "DISPUTE_ID" | "CAMPAIGN_ID" | "LOGISTIC_PROVIDER_ID" | "FINE_REVERSAL_ID" | "REFUND_DETAIL_ID" | "CHARGING_ID" | "WARNING_ID" | "LOGISTIC_OPTION_ID" | "TRANSACTION_REFUND_ID" | "ID" | "MERCHANT_PAYMENT_ID" | "FBW_INVOICE_ID";
export declare type LineItemType = "POLICY_VIOLATION_FINE" | "MISLEADING_VARIATION_FINE" | "B2B_SALE_FEE" | "WISH_PARCEL_SERVICE_ADJUST_PAYMENT" | "INITIAL_WISHPOST_SHIPPING_REFUND_OFFSET" | "REV_SHARE_ADJUST_PAYMENT" | "WISH_EXPRESS_REBATE_REVERSE" | "DISPUTE_APPROVED" | "WITHHELD_RELEASED" | "LOGISTIC_FEE" | "EARLY_PAYMENT" | "OVERPAY_PAYMENT_AMOUNT" | "QUALITY_REFUND_FINE" | "MERCHANT_HARASSMENT" | "WISHPOST_ADJUSTMENT_PAYMENT" | "WITHHOLD_FUND_FINE" | "EXTERNAL_BOOST_CPA_FEE" | "UNDERPAY_PAYMENT_AMOUNT" | "STRATEGIC_ORDER_REBATE" | "PAID_PLACEMENT_IMPRESSION_FEE" | "LCL_FBW_FEE" | "EARLY_PAYMENT_CANCELLATION" | "DECEPTIVE_FULFILLMENT_FINE" | "STORE_PAYMENT_CANCELLATION" | "ESTIMATED_WISHPOST_SHIPPING" | "PAYMENT" | "MARKETING_REBATE" | "UNFULFILLED_ORDER_FINE" | "PRODUCT_UNTAGGED_MISLEADING" | "FBW_PAYMENT" | "CHINA_POST_SUBSIDY_REVERSE" | "CANCEL_WITHHOLD_PAYMENT" | "COUNTERFEIT_REFUND" | "COVID19_SUBSIDY_REVERSE" | "COLLECTIONS_BOOST_CAMPAIGN_FEE" | "RETURN_LABEL_FEE" | "ONEOFF_FINE" | "WISHPOST_ADJUSTMENT_DEDUCTION" | "FINE_REVERSED" | "PRODUCT_REBATE" | "DOUBLE_DEDUCTION_BOOK_KEEPER" | "LATE_CONFIRMED_FULFILLMENT_FINE" | "FAKE_TRACKING_FINE" | "WITHHOLD_RELEASE" | "REFUNDED" | "PRODUCT_LISTING_FEE" | "CONSOLIDATE_MP_PAYMENT" | "OTHER_DEDUCTION" | "REGISTRATION_REFUND" | "EARLY_PAYMENT_REIMBURSEMENT_FEE" | "ONEOFF" | "EXTERNAL_BOOST_FEE" | "MARKETING_REBATE_REVERSE" | "MERCHANT_INCENTIVE" | "PROMOTED_PRODUCT_DISABLE_FINE" | "INFRACTION_FINE" | "MERCHANT_INCENTIVE_REVERSE" | "RETROACTIVE_REFUND_FOR_LOW_RATED_PRODUCT" | "PRODUCT_BOOST_BALANCE_REFUND" | "NEW_REFUNDED" | "SE_CASH_BACK" | "LEGAL_SETTLEMENT_FINE" | "FBW_FEE" | "MERCHANT_CANCELLATION_FINE" | "EARLY_PAYMENT_DEDUCTION" | "PROMOTION_FEE" | "LEGAL_SETTLEMENT_RESERVED_PENALTY" | "COVID19_SUBSIDY" | "STORE_PAYMENT_DEDUCTION" | "SE_CASH_BACK_REVERSE" | "RETROACTIVE_REFUND_FOR_PROBLEM_PRODUCT" | "FAKE_RATING_FINE" | "ESTIMATED_WISHPOST_SHIPPING_REFUND" | "INITIAL_WISHPOST_SHIPPING_REFUND" | "CN_ORDER_NOT_SHIP_WITH_WISHPOST_FINE" | "INITIAL_WISHPOST_SHIPPING" | "CHINA_POST_SUBSIDY" | "STORE_PAYMENT" | "WISH_EXPRESS_REBATE" | "ONEOFF_ADMIN_TOOL" | "SHIPPED" | "WITHHOLD_PAYMENT" | "INITIAL_WISHPOST_SHIPPING_OFFSET" | "LEGAL_SETTLEMENT_PAID_PENALTY" | "WISH_PARCEL_SERVICE_ADJUST_FEE" | "CONSOLIDATE_MP_FINE" | "UNCONFIRMED_CARRIER_FINE" | "WISH_PARCEL_SERVICE_FEE" | "PAID_PLACEMENT_ENROLLMENT_FEE" | "STRATEGIC_ORDER_REBATE_REVERSE";
export declare type LinkProductComplianceAction = "UPDATE_EU_RP";
export declare type LinkProductComplianceSchema = {
    readonly __typename?: "LinkProductComplianceSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly merchantId: Scalars["ObjectIdType"];
    readonly product?: Maybe<ProductSchema>;
    readonly productCategories: ReadonlyArray<MsrCategory>;
    readonly trueTags?: Maybe<ReadonlyArray<TrueTagSchema>>;
    readonly reviewState: LinkProductComplianceState;
    readonly euResponsiblePerson?: Maybe<ResponsiblePersonSchema>;
};
export declare type LinkProductComplianceState = "NO_RP" | "HAS_RP";
export declare type LinkProductComplianceUpsertInput = {
    readonly action: LinkProductComplianceAction;
    readonly productIds: ReadonlyArray<Scalars["ObjectIdType"]>;
    readonly responsiblePersonId?: Maybe<Scalars["ObjectIdType"]>;
    readonly compliance: ResponsiblePersonCompliance;
};
export declare type LinkShippingProfile = {
    readonly __typename?: "LinkShippingProfile";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type Locale = "en" | "zh" | "de" | "fr" | "es" | "pt" | "sv" | "tr" | "pl" | "nl" | "ar" | "cs" | "hu" | "da" | "fi" | "nb" | "ko" | "ja" | "it" | "th" | "vi" | "id" | "up";
export declare type LoggableTable = "PRODUCT_BOOST_EXPOSURE_BOX_VIEW" | "PRODUCT_BOOST_EXPOSURE_BOX_CREATE_CLICK" | "PRODUCT_BOOST_EXPOSURE_BOX_LEARN_MORE_CLICK" | "PRODUCT_BOOST_SPLASH_PAGE" | "PRODUCT_BOOST_LIST_CAMPAIGN_BUDGET_DEPLETION_CLICK" | "PRODUCT_BOOST_LIST_CAMPAIGN_BUDGET_DEPLETION_VIEW" | "PRODUCT_BOOST_NEW_NAV_TAB_CLICK" | "PRODUCT_BOOST_PUBLISH_AUTOMATED_CAMPAIGN_MODAL_VIEW" | "PRODUCT_BOOST_PUBLISH_AUTOMATED_CAMPAIGN_MODAL_CLICK" | "PRODUCT_BOOST_PRODUCT_FEEDBACK_VIEW" | "PB_BUDGET_DEPLETION_NOTI" | "PB_AUTOMATED_CAMPAIGN_PUBLISHED_NOTI" | "PB_CREATE_CAMPAIGN_ACTIVITY_TRACKER" | "PB_CREATE_CAMPAIGN_BUDGET_TRACKER" | "PB_CREATE_CAMPAIGN_USER_ERRORS" | "PB_PRODUCT_FEED_UPLOAD_PORTAL" | "PB_V2_CREATE_CAMPAIGN_ACTIVITY_TRACKER" | "PRODUCT_BOOST_FREE_PROMOTION_CAMPAIGN_MODAL_VIEW" | "PRODUCT_BOOST_FREE_PROMOTION_CAMPAIGN_MODAL_CLICK" | "PRODUCT_BOOST_DUPLICATE_CAMPAIGN_REMINDER_VIEW" | "PRODUCT_BOOST_DUPLICATE_CAMPAIGN_REMINDER_CLICK" | "PRODUCT_BOOST_PROMOTION_MODAL" | "PRODUCT_BOOST_ENABLE_PENDING_CAMPAIGN_MODAL" | "PRODUCT_BOOST_ENABLE_PENDING_CAMPAIGN_MODAL_CLICK" | "CAMPAIGN_DETAILS_PAGE_MERCHANT_ACTION" | "FBW_SPLASH_PAGE" | "TAX_DECLINE_ENROLLMENT" | "HOME_BANNER_IMPRESSION" | "HOME_BANNER_CTA_CLICK" | "MERCHANT_TODO_ITEMS" | "PRODUCT_BOOST_ONE_CLICK_DUPLICATE_AUTOMATED" | "PRODUCT_BOOST_NEW_PAGES_BUTTON_CLICK" | "MERCHANT_STANDING_CLICK" | "FINE_POLICY_PAGE_CLICK" | "MERCHANT_NAV_CLICK" | "FBW_RECOMMENDATION_DASHBOARD_CLICK" | "FBW_INVENTORY_LISTING_PAGE_ACTION" | "FBW_SHIPPING_PLAN_CREATION" | "FBS_PERFORMANCE_PAGE_ACTION" | "ADD_PRODUCT_BUTTON_CLICK" | "PRODUCT_BOOST_PRODUCT_LIFETIME_PERFORMANCE_PAGE_VIEW" | "BRAND_EDUCATION_CLICK" | "RESELLER_AGREEMENT_PAGE" | "SIGNUP_V3_ID_CARD_EXAMPLE" | "PB_BUDGET_DEPLETION_SOURCE" | "PRICE_DROP_UI" | "PRODUCT_BOOST_FREE_CREDIT_MODAL" | "PRODUCT_BOOST_TRENDING_CATEGORIES_MODAL" | "MM_INTERNAL_DOWNLOADS" | "EARLY_PAYMENT_REQUESTS" | "CLICK_CHECK_MY_MAIL" | "RECOMMENDATION_EMAIL_METRICS" | "EARLY_PAYMENT_PAGE" | "CHROME_SEARCH" | "MERCHANT_FAILED_PASSWORD_ATTEMPTS" | "HOME_PAGE_TUTORIAL_VIDEO_PLAYS" | "BLACKLIST_CRITERIA_DASHBOARD_ACTION" | "PRODUCT_BOOST_MANAGE_DAILY_BUDGET_CAMPAIGN_PAGE_VIEW" | "PRODUCT_BOOST_UPDATE_DAILY_BUDGET_CAMPAIGN_CLICK" | "PRODUCT_BOOST_CREATE_DAILY_BUDGET_CAMPAIGN_PAGE_VIEW" | "PRODUCT_BOOST_CREATE_DAILY_BUDGET_CAMPAIGN_CLICK" | "COLLECTIONS_BOOST_UI" | "PLUS_WISH_EXPRESS_UI" | "PLUS_SELLER_VERIFICATION_UI" | "PLUS_KYC_VERIFICATION_UI" | "PRODUCT_SHIPPING_PAGE_VIEW" | "PRODUCT_SHIPPING_CLICK_SAVE" | "ADD_GTIN_PRODUCT" | "MERCHANT_VACATION_MODE_SURVEY" | "PLUS_PRODUCT_UPLOAD" | "PERFORMANCE_OVERVIEW_DASHBOARD" | "MERCHANT_CS_SURVEY_RESULT" | "MERCHANT_WISH_PARCEL_SERVICE";
export declare type LogicalQueueSchema = {
    readonly __typename?: "LogicalQueueSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name?: Maybe<Scalars["String"]>;
    readonly state?: Maybe<LogicalQueueStateType>;
};
export declare type LogicalQueueStateType = "ACTIVE" | "DISABLED";
export declare type LoginAsMutations = {
    readonly __typename?: "LoginAsMutations";
    readonly user?: Maybe<ByUserIdMutation>;
};
export declare type LoginAsMutationsUserArgs = {
    input: ByUserIdInput;
};
export declare type LoginErrorState = "TFA_REQUIRED" | "CAPTCHA_REQUIRED" | "LOGIN_ERROR";
export declare type LoginMutation = {
    readonly __typename?: "LoginMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly errorState?: Maybe<LoginErrorState>;
    readonly loginOk: Scalars["Boolean"];
    readonly sessionKey?: Maybe<Scalars["String"]>;
    readonly obfuscatedPhoneNumber?: Maybe<Scalars["String"]>;
    readonly preferQr?: Maybe<Scalars["Boolean"]>;
    readonly wechatBound?: Maybe<Scalars["Boolean"]>;
};
export declare type LoginMutationInput = {
    readonly username: Scalars["String"];
    readonly password: Scalars["String"];
    readonly rememberMe?: Maybe<Scalars["Boolean"]>;
    readonly tfaToken?: Maybe<Scalars["String"]>;
    readonly qrTicket?: Maybe<Scalars["String"]>;
    readonly captchaToken?: Maybe<Scalars["String"]>;
    readonly captchaCode?: Maybe<Scalars["String"]>;
    readonly deviceId?: Maybe<Scalars["String"]>;
    readonly deviceName?: Maybe<Scalars["String"]>;
};
export declare type LogisticsMetadataSchema = {
    readonly __typename?: "LogisticsMetadataSchema";
    readonly weight?: Maybe<Weight>;
    readonly length?: Maybe<Length>;
    readonly width?: Maybe<Length>;
    readonly height?: Maybe<Length>;
    readonly isFbwRecommended?: Maybe<Scalars["Boolean"]>;
    readonly gmvPer1k?: Maybe<CurrencyValue>;
};
export declare type LogisticsMutations = {
    readonly __typename?: "LogisticsMutations";
    readonly upsertConfirmedDeliveryCarrier?: Maybe<UpsertConfirmedDeliveryCarrier>;
    readonly createShippingProvider: CreateShippingProvider;
    readonly changeShippingProviderStatus: ChangeShippingProviderStatus;
    readonly updateShippingProviderName: UpdateShippingProviderName;
    readonly updateShippingProvider: UpdateShippingProvider;
    readonly fulfilledByWish?: Maybe<FulfilledByWishMutations>;
};
export declare type LogisticsMutationsUpsertConfirmedDeliveryCarrierArgs = {
    input: DeliveryCarrierUpsertInput;
};
export declare type LogisticsMutationsCreateShippingProviderArgs = {
    input: ShippingProviderInput;
};
export declare type LogisticsMutationsChangeShippingProviderStatusArgs = {
    input: ChangeShippingProviderStatusInput;
};
export declare type LogisticsMutationsUpdateShippingProviderNameArgs = {
    input: UpdateShippingProviderNameInput;
};
export declare type LogisticsMutationsUpdateShippingProviderArgs = {
    input: ShippingProviderInput;
};
export declare type LogisticsSchema = {
    readonly __typename?: "LogisticsSchema";
    readonly confirmedDeliveryCarrier?: Maybe<ConfirmedDeliveryCarriers>;
    readonly shippingProviders?: Maybe<ReadonlyArray<ShippingProviderSchema>>;
    readonly shippingProvidersCount?: Maybe<Scalars["Int"]>;
    readonly nextProviderId?: Maybe<Scalars["Int"]>;
    readonly fbw: FulfilledByWishSchema;
    readonly shippingProviderPolicies?: Maybe<ReadonlyArray<ShippingProviderPolicySchema>>;
};
export declare type LogisticsSchemaShippingProvidersArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ShippingProviderSearchType>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    states?: Maybe<ReadonlyArray<ShippingProviderState>>;
    isQualified?: Maybe<Scalars["Boolean"]>;
};
export declare type LogisticsSchemaShippingProvidersCountArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ShippingProviderSearchType>;
    states?: Maybe<ReadonlyArray<ShippingProviderState>>;
};
export declare type LogisticsSchemaShippingProviderPoliciesArgs = {
    destCountryCode?: Maybe<CountryCode>;
};
export declare type LogoutMutation = {
    readonly __typename?: "LogoutMutation";
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type LogToTreasureData = {
    readonly __typename?: "LogToTreasureData";
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type LogToTreasureDataInput = {
    readonly table: LoggableTable;
    readonly data: Scalars["JSONString"];
};
export declare type LqdCampaignInput = {
    readonly productId: Scalars["ObjectIdType"];
    readonly startDate: DatetimeInput;
};
export declare type LqdCampaignSchema = {
    readonly __typename?: "LQDCampaignSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly productId: Scalars["ObjectIdType"];
    readonly product: ProductSchema;
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly state: LqdCampaignState;
    readonly impressions: Scalars["Int"];
};
export declare type LqdCampaignState = "CANCELLED" | "ENDED" | "STARTED" | "SAVED" | "NEW";
export declare type LqdProductStatsByDaySchema = {
    readonly __typename?: "LQDProductStatsByDaySchema";
    readonly productId: Scalars["ObjectIdType"];
    readonly product: ProductSchema;
    readonly date: Datetime;
    readonly clicks: Scalars["Int"];
    readonly impressions: Scalars["Int"];
    readonly lqdOrders: Scalars["Int"];
    readonly orders: Scalars["Int"];
    readonly gmv: CurrencyValue;
};
export declare type LqdPromotionSchema = {
    readonly __typename?: "LQDPromotionSchema";
    readonly campaigns: ReadonlyArray<LqdCampaignSchema>;
    readonly campaignsCount: Scalars["Int"];
};
export declare type LqdPromotionSchemaCampaignsArgs = {
    startDate: DatetimeInput;
    endDate: DatetimeInput;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
};
export declare type LqdPromotionSchemaCampaignsCountArgs = {
    startDate: DatetimeInput;
    endDate: DatetimeInput;
};
export declare type LqdPromotionStats = {
    readonly __typename?: "LQDPromotionStats";
    readonly byDay: ReadonlyArray<LqdProductStatsByDaySchema>;
};
export declare type MarketingBonusBudgetType = "CNY_BONUS_BUDGET" | "DECREASED_PB_SPEND_BONUS_BUDGET" | "VIDEO_PRODUCTS_BONUS_BUDGET" | "NO_PROMOTION";
export declare type MarketingCampaignPropertySchema = {
    readonly __typename?: "MarketingCampaignPropertySchema";
    readonly maxCampaignNameLength: Scalars["Int"];
    readonly minStartDate: Datetime;
    readonly maxStartDate: Datetime;
    readonly maxNumWeeks: Scalars["Int"];
    readonly maxProducts: Scalars["Int"];
    readonly minBid: CurrencyValue;
    readonly maxBid: CurrencyValue;
    readonly minKeywords: Scalars["Int"];
    readonly maxKeywords: Scalars["Int"];
    readonly maxKeywordLen: Scalars["Int"];
    readonly maxCsvDownloadRows: Scalars["Int"];
    readonly learningStatusThreshold: Scalars["Int"];
    readonly flexibleBudgetSuggestedBudgetFactor: Scalars["Float"];
    readonly dailyBudgetCampaignLimit: Scalars["Int"];
    readonly campaignLockDays: Scalars["Int"];
};
export declare type MarketingCampaignState = "STARTED" | "READY" | "PAID" | "DRAFTING" | "ENDED" | "STOPPED" | "CANCELLED" | "NEW" | "SAVED" | "PENDING";
export declare type MarketingFlexibleBudgetType = "ALL_TIER" | "DISABLED" | "SILVER_TIER";
export declare type MarketingImpressionDailyStats = {
    readonly __typename?: "MarketingImpressionDailyStats";
    readonly date: Datetime;
    readonly impressions?: Maybe<Scalars["Int"]>;
};
export declare type MarketingMerchantPropertySchema = {
    readonly __typename?: "MarketingMerchantPropertySchema";
    readonly state: MarketingMerchantState;
    readonly allowMaxboost: Scalars["Boolean"];
    readonly hasAutomatedCampaign: Scalars["Boolean"];
    readonly showCredits: Scalars["Boolean"];
    readonly wishSubsidyDiscountFactor: Scalars["Float"];
    readonly defaultFlexibleBudgetType: MarketingFlexibleBudgetType;
    readonly minBudgetToAdd: CurrencyValue;
    readonly maxBudgetToAdd: CurrencyValue;
    readonly minSpendPerProduct: CurrencyValue;
    readonly dailyMinBudget: CurrencyValue;
    readonly dailyBudgetEnabled: Scalars["Boolean"];
    readonly allowLocalizedCurrency: Scalars["Boolean"];
    readonly spending: MarketingSpendingBreakdown;
    readonly latestTosVersion: Scalars["Int"];
    readonly canAcceptTos: Scalars["Boolean"];
    readonly isFreeBudgetMerchant: Scalars["Boolean"];
    readonly refundAssuranceConstants: RefundAssuranceConstants;
    readonly offsiteBoost: OffsiteBoost;
};
export declare type MarketingMerchantState = "INVITED" | "REJECTED" | "APPROVED" | "PENDING";
export declare type MarketingPeriodImpressionStats = {
    readonly __typename?: "MarketingPeriodImpressionStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly impressionDailyStats: ReadonlyArray<MarketingImpressionDailyStats>;
    readonly totalImpressions: Scalars["String"];
};
export declare type MarketingServiceMutations = {
    readonly __typename?: "MarketingServiceMutations";
    readonly upsertProductPromotions: UpsertProductPromotions;
    readonly acceptTos: ProductBoostAcceptTos;
    readonly updateOffsiteBoost: UpdateOffsiteBoost;
    readonly createLqdCampaign: CreateLqdCampaign;
};
export declare type MarketingServiceMutationsUpsertProductPromotionsArgs = {
    input: ProductPromotionsInput;
};
export declare type MarketingServiceMutationsAcceptTosArgs = {
    input: ProductBoostAcceptTosInput;
};
export declare type MarketingServiceMutationsUpdateOffsiteBoostArgs = {
    input: OffsiteBoostPropertyInput;
};
export declare type MarketingServiceMutationsCreateLqdCampaignArgs = {
    input: LqdCampaignInput;
};
export declare type MarketingServiceSchema = {
    readonly __typename?: "MarketingServiceSchema";
    readonly campaign?: Maybe<CampaignSchema>;
    readonly merchantProperty?: Maybe<MarketingMerchantPropertySchema>;
    readonly currentMerchant?: Maybe<MarketingMerchantPropertySchema>;
    readonly campaignProperty?: Maybe<MarketingCampaignPropertySchema>;
    readonly impressionStats: MarketingPeriodImpressionStats;
    readonly productPromotion?: Maybe<ProductPromotionSchema>;
    readonly productPromotions: ReadonlyArray<ProductPromotionSchema>;
    readonly productPromotionsCount: Scalars["Int"];
    readonly promotableProducts: ReadonlyArray<PromotableProduct>;
    readonly promotableProductsCount: Scalars["Int"];
    readonly trendingCategories: ReadonlyArray<TrueTagSchema>;
    readonly lqdPromotion: LqdPromotionSchema;
    readonly balanceTransactions: ReadonlyArray<BalanceTransactionRecord>;
    readonly balanceTransactionsCount: Scalars["Int"];
    readonly creditTransactions: ReadonlyArray<CreditTransactionRecord>;
    readonly creditTransactionsCount: Scalars["Int"];
    readonly lowBudgetCampaignCount: Scalars["Int"];
    readonly pendingCampaignCount: Scalars["Int"];
    readonly actionRequiredCampaignCount: Scalars["Int"];
};
export declare type MarketingServiceSchemaCampaignArgs = {
    id: Scalars["ObjectIdType"];
    duplicateId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type MarketingServiceSchemaMerchantPropertyArgs = {
    merchantId: Scalars["ObjectIdType"];
};
export declare type MarketingServiceSchemaImpressionStatsArgs = {
    startTime: DatetimeInput;
    endTime: DatetimeInput;
};
export declare type MarketingServiceSchemaProductPromotionArgs = {
    productId: Scalars["ObjectIdType"];
};
export declare type MarketingServiceSchemaProductPromotionsArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ProductPromotionSearchType>;
    promotionStatuses?: Maybe<ReadonlyArray<ProductPromotionStatus>>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    refundAssuranceType?: Maybe<ProductPromotionRefundAssuranceType>;
};
export declare type MarketingServiceSchemaProductPromotionsCountArgs = {
    query?: Maybe<Scalars["String"]>;
    refundAssuranceType?: Maybe<ProductPromotionRefundAssuranceType>;
    searchType?: Maybe<ProductPromotionSearchType>;
    promotionStatuses?: Maybe<ReadonlyArray<ProductPromotionStatus>>;
};
export declare type MarketingServiceSchemaPromotableProductsArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ProductPromotionSearchType>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    wishExpressOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type MarketingServiceSchemaPromotableProductsCountArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ProductPromotionSearchType>;
    wishExpressOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type MarketingServiceSchemaBalanceTransactionsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
};
export declare type MarketingServiceSchemaCreditTransactionsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
};
export declare type MarketingServiceSchemaPendingCampaignCountArgs = {
    createdInPastDays?: Maybe<Scalars["Int"]>;
};
export declare type MarketingServiceSchemaActionRequiredCampaignCountArgs = {
    createdInPastDays?: Maybe<Scalars["Int"]>;
};
export declare type MarketingSpendingBreakdown = {
    readonly __typename?: "MarketingSpendingBreakdown";
    readonly accountBalance: CurrencyValue;
    readonly promotionLoan: CurrencyValue;
    readonly budgetAvailable: CurrencyValue;
    readonly promotionLoanDescription: Scalars["String"];
    readonly promotionCredit: CurrencyValue;
    readonly promotionBalance: CurrencyValue;
    readonly pending: CurrencyValue;
};
export declare type MarketingStats = {
    readonly __typename?: "MarketingStats";
    readonly offsiteBoost: OffsiteBoostStats;
    readonly lqdPromotion: LqdPromotionStats;
};
export declare type MarketingStatsOffsiteBoostArgs = {
    startDate: DatetimeInput;
    endDate: DatetimeInput;
};
export declare type MarketingStatsLqdPromotionArgs = {
    campaignId: Scalars["ObjectIdType"];
};
export declare type MerchantAnnouncementSchema = {
    readonly __typename?: "MerchantAnnouncementSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly type: AnnouncementType;
    readonly createdAt?: Maybe<Datetime>;
    readonly expiryDate?: Maybe<Datetime>;
    readonly title?: Maybe<Scalars["String"]>;
    readonly message?: Maybe<Scalars["String"]>;
    readonly ctaText?: Maybe<Scalars["String"]>;
    readonly ctaLink?: Maybe<Scalars["String"]>;
    readonly ctaDueDate?: Maybe<Datetime>;
    readonly sender: UserSchema;
    readonly state: AnnouncementState;
    readonly categories?: Maybe<ReadonlyArray<AnnouncementCategorySchema>>;
    readonly program?: Maybe<AnnouncementProgramSchema>;
    readonly important?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantBrandSchema = {
    readonly __typename?: "MerchantBrandSchema";
    readonly brand: BrandSchema;
    readonly numProducts: Scalars["Int"];
    readonly lifetimeStatsObject?: Maybe<BrandedMerchantLifeTimeStatsObjectSchema>;
};
export declare type MerchantCountryDetailsSchema = {
    readonly __typename?: "MerchantCountryDetailsSchema";
    readonly detectedDomicileCountry?: Maybe<Country>;
    readonly detectedShipFromCountry?: Maybe<Country>;
    readonly domicileDetectionReason?: Maybe<Scalars["String"]>;
    readonly domicileDetectionFactors: ReadonlyArray<DetectionFactor>;
};
export declare type MerchantCountryDetectionFactorType = "PHONE_COUNTRY" | "SHIP_FROM_OVERRIDE" | "PAYMENT_PROVIDER" | "BD_REP_COUNTRY" | "GEOIP_LOGIN" | "MERCHANT_GROUP" | "STORE_ADDRESS" | "ERP_ENROLLMENT" | "WISHPOST_LINKED" | "BUSINESS_ADDRESS" | "DOMICILE_OVERRIDE" | "BOUND_WISHPOST" | "EMAIL_PROVIDER" | "ORDER_SHIPPING_PROVIDER" | "ORDER_TRACKING_ORIGIN" | "VERIFIED_PROFILE";
export declare type MerchantCsStats = {
    readonly __typename?: "MerchantCSStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly lateResponseRate30d?: Maybe<Scalars["Float"]>;
    readonly customerSatisfactionScore?: Maybe<Scalars["Float"]>;
    readonly averageTicketResponseTime?: Maybe<Timedelta>;
};
export declare type MerchantDeliveryStats = {
    readonly __typename?: "MerchantDeliveryStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly timeToDoor?: Maybe<Timedelta>;
};
export declare type MerchantFacingPayoutState = "GENERATING" | "SUCCESS" | "RELEASED" | "NA" | "DELAYED" | "WITHHOLD" | "REISSUED" | "FAILED" | "RESUBMITTED" | "CANCELLED" | "IN_PROGRESS" | "PENDING";
export declare type MerchantFbwSchema = {
    readonly __typename?: "MerchantFBWSchema";
    readonly availableWarehouses?: Maybe<ReadonlyArray<FbwWarehouseSchema>>;
    readonly availableWarehousesForShippingPlanSubmission?: Maybe<ReadonlyArray<FbwWarehouseSchema>>;
};
export declare type MerchantFeedJobStatus = "EXCEPTION" | "NEW_AND_EMAILED" | "FINISHED" | "RUNNING" | "FINISHED_AND_EMAILED" | "CANCELLED" | "NEW" | "PENDING";
export declare type MerchantFileSchema = {
    readonly __typename?: "MerchantFileSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly displayFilename: Scalars["String"];
    readonly fileUrl: Scalars["String"];
};
export declare type MerchantFinalSaleAction = "ENABLE" | "DISABLE";
export declare type MerchantFinalSaleMutations = {
    readonly __typename?: "MerchantFinalSaleMutations";
    readonly updateMerchantFinalSale?: Maybe<UpdateMerchantFinalSale>;
};
export declare type MerchantFinalSaleMutationsUpdateMerchantFinalSaleArgs = {
    input?: Maybe<MerchantFinalSaleUpdateInput>;
};
export declare type MerchantFinalSaleUpdateInput = {
    readonly action: MerchantFinalSaleAction;
    readonly merchantId: Scalars["ObjectIdType"];
    readonly category: FinalSaleCategory;
};
export declare type MerchantFineExemptionInfoLinkType = "CATEGORY" | "ARTICLE" | "FULL_LINK";
export declare type MerchantFineSchema = {
    readonly __typename?: "MerchantFineSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly isExempt: Scalars["Boolean"];
    readonly exemptInfoLink?: Maybe<Scalars["String"]>;
    readonly exemptLinkType?: Maybe<MerchantFineExemptionInfoLinkType>;
};
export declare type MerchantFulfillmentExtensionSchema = {
    readonly __typename?: "MerchantFulfillmentExtensionSchema";
    readonly extensionDays?: Maybe<Scalars["Int"]>;
    readonly extensionDeadlineDate?: Maybe<Datetime>;
    readonly surveyOptions: ReadonlyArray<FulfillmentExtensionSurveyOptionSchema>;
    readonly isActive: Scalars["Boolean"];
    readonly canEdit: Scalars["Boolean"];
};
export declare type MerchantGamingReviewFieldTicketType = "lastSourceUpsertDate";
export declare type MerchantGamingReviewMutations = {
    readonly __typename?: "MerchantGamingReviewMutations";
    readonly updateMerchantGamingReviewTicket?: Maybe<UpdateMerchantGamingReviewTicket>;
    readonly manualCreateUpload?: Maybe<MerchantGamingReviewTicketManualCreationUpload>;
    readonly manualCreate?: Maybe<MerchantGamingReviewTicketManualCreation>;
};
export declare type MerchantGamingReviewMutationsUpdateMerchantGamingReviewTicketArgs = {
    input?: Maybe<MerchantGamingReviewUpdateInput>;
};
export declare type MerchantGamingReviewMutationsManualCreateUploadArgs = {
    input: MerchantGamingReviewTicketManualCreationUploadInput;
};
export declare type MerchantGamingReviewMutationsManualCreateArgs = {
    input: MerchantGamingReviewTicketManualCreationUploadInput;
};
export declare type MerchantGamingReviewPolicyTierType = "SUSPICIOUS_TIER" | "HOME_TIER" | "PROBATION_TIER";
export declare type MerchantGamingReviewSourceType = "POLICY" | "GATE_KEEPER" | "WISH_ADMIN";
export declare type MerchantGamingReviewState = "AWAITING_ADMIN" | "CONFIRMED" | "REJECTED" | "ESCALATED" | "CLOSED";
export declare type MerchantGamingReviewTicketAction = "COMMENT" | "CLAIM" | "ESCALATE" | "UPDATE_POLICY_TIER" | "UNCLAIM" | "CLOSE";
export declare type MerchantGamingReviewTicketCommentSchema = {
    readonly __typename?: "MerchantGamingReviewTicketCommentSchema";
    readonly senderId?: Maybe<Scalars["ObjectIdType"]>;
    readonly senderName?: Maybe<Scalars["String"]>;
    readonly message: Scalars["String"];
    readonly date: Datetime;
};
export declare type MerchantGamingReviewTicketManualCreation = {
    readonly __typename?: "MerchantGamingReviewTicketManualCreation";
    readonly ok: Scalars["Boolean"];
    readonly logs?: Maybe<Scalars["String"]>;
};
export declare type MerchantGamingReviewTicketManualCreationSchema = {
    readonly __typename?: "MerchantGamingReviewTicketManualCreationSchema";
    readonly merchantId: Scalars["ObjectIdType"];
    readonly reason: Scalars["String"];
};
export declare type MerchantGamingReviewTicketManualCreationUpload = {
    readonly __typename?: "MerchantGamingReviewTicketManualCreationUpload";
    readonly ok: Scalars["Boolean"];
    readonly logs?: Maybe<Scalars["String"]>;
    readonly updateList: ReadonlyArray<MerchantGamingReviewTicketManualCreationSchema>;
};
export declare type MerchantGamingReviewTicketManualCreationUploadInput = {
    readonly fileUrl: Scalars["String"];
};
export declare type MerchantGamingReviewTicketSchema = {
    readonly __typename?: "MerchantGamingReviewTicketSchema";
    readonly merchant?: Maybe<MerchantSchema>;
    readonly id: Scalars["ObjectIdType"];
    readonly merchantGamingReviewPolicyTier?: Maybe<MerchantGamingReviewPolicyTierType>;
    readonly merchantId: Scalars["ObjectIdType"];
    readonly sources: ReadonlyArray<MerchantGamingReviewTicketSourceSchema>;
    readonly state: MerchantGamingReviewState;
    readonly lastSourceUpsertDate: Datetime;
    readonly isOpen: Scalars["Boolean"];
    readonly isClosed: Scalars["Boolean"];
    readonly isClaimed: Scalars["Boolean"];
    readonly claimedAdminId?: Maybe<Scalars["ObjectIdType"]>;
    readonly claimedDate?: Maybe<Datetime>;
    readonly decisionAdminId?: Maybe<Scalars["ObjectIdType"]>;
    readonly decisionDate?: Maybe<Datetime>;
    readonly infractionIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly comments?: Maybe<ReadonlyArray<MerchantGamingReviewTicketCommentSchema>>;
    readonly claimedAdminUser?: Maybe<UserSchema>;
};
export declare type MerchantGamingReviewTicketSort = {
    readonly field: MerchantGamingReviewFieldTicketType;
    readonly order: SortOrderType;
};
export declare type MerchantGamingReviewTicketSourceSchema = {
    readonly __typename?: "MerchantGamingReviewTicketSourceSchema";
    readonly triggerDate: Datetime;
    readonly sourceType: MerchantGamingReviewSourceType;
    readonly reason?: Maybe<Scalars["String"]>;
    readonly creator?: Maybe<UserSchema>;
};
export declare type MerchantGamingReviewUpdateInput = {
    readonly action: MerchantGamingReviewTicketAction;
    readonly id: Scalars["ObjectIdType"];
    readonly policyTier?: Maybe<MerchantGamingReviewPolicyTierType>;
    readonly message?: Maybe<Scalars["String"]>;
    readonly infractionIds?: Maybe<Scalars["String"]>;
};
export declare type MerchantInviteInfo = {
    readonly __typename?: "MerchantInviteInfo";
    readonly valid: Scalars["Boolean"];
    readonly email?: Maybe<Scalars["String"]>;
    readonly promotionRevShare?: Maybe<Scalars["Float"]>;
    readonly promotionPeriodInDays?: Maybe<Scalars["Int"]>;
    readonly useMarketingTransactionBonus?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantMobile = {
    readonly __typename?: "MerchantMobile";
    readonly minimumAppVersion: Scalars["String"];
};
export declare type MerchantMobileMinimumAppVersionArgs = {
    platform: MobilePlatformType;
    currentVersion: Scalars["String"];
};
export declare type MerchantMutation = {
    readonly __typename?: "MerchantMutation";
    readonly shippingSetting: ShippingSettingMutations;
    readonly merchantTermsAgreed?: Maybe<MerchantTermsAgreedMutations>;
    readonly changeVacationMode: ChangeVacationModeMutation;
    readonly changeDisplayName: ChangeDisplayNameMutation;
    readonly merchantSenderAddress: MerchantSenderAddressMutations;
    readonly changePreferredUnits: ChangePreferredUnitsMutation;
    readonly euVatTax?: Maybe<EuvatTaxMutations>;
    readonly taxSettings: TaxSettingsMutations;
    readonly warehouseSettings?: Maybe<MerchantWarehouseMutations>;
    readonly merchantTaxIdentification: MerchantTaxIdentificationMutations;
};
export declare type MerchantMutationChangeVacationModeArgs = {
    input: ChangeVacationModeInput;
};
export declare type MerchantMutationChangeDisplayNameArgs = {
    input: ChangeDisplayNameInput;
};
export declare type MerchantMutationChangePreferredUnitsArgs = {
    input: ChangePreferredUnitsInput;
};
export declare type MerchantOnboardingStep = "ADD_PRODUCT" | "ENABLE_2FA" | "SETUP_SHIPPING" | "STORE_IDENTIFICATION" | "PAYMENT_INFO" | "BUSINESS_INFO" | "CONTACT_INFO" | "BLUE_DOWNLOAD_APP_DEPRECATED" | "BLUE_SET_STORE_HOURS_DEPRECATED" | "EXTRA_INFO" | "STORE_IDENTIFICATION_DEPRECATED" | "LEARN_ABOUT_WE" | "DEP_STORE_REGISTRATION_FEE" | "CONFIRM_TOS" | "BLUE_SET_PAYMENT_INFO_DEPRECATED" | "STORE_INFO" | "SETUP_ACCOUNT" | "CONFIRM_PHONE" | "BLUE_SET_STORE_PHOTO_DEPRECATED" | "RESELLER_AGREEMENT" | "CONFIRM_EMAIL" | "BLUE_LIST_FIRST_PRODUCT_DEPRECATED";
export declare type MerchantOneoffPaymentMutations = {
    readonly __typename?: "MerchantOneoffPaymentMutations";
    readonly createBulkOneoffAdminToolPayments?: Maybe<CreateBulkOneoffAdminToolPayments>;
};
export declare type MerchantOneoffPaymentMutationsCreateBulkOneoffAdminToolPaymentsArgs = {
    input: CreateBulkOneoffAdminToolPaymentsInput;
};
export declare type MerchantOneoffPaymentSchema = {
    readonly __typename?: "MerchantOneoffPaymentSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly creationTime: Datetime;
    readonly merchantId: Scalars["ObjectIdType"];
    readonly amount: CurrencyValue;
    readonly eligibleTime: Datetime;
    readonly paymentId?: Maybe<Scalars["ObjectIdType"]>;
    readonly type: OneoffPaymentType;
    readonly status: OneoffPaymentStatus;
    readonly orderId?: Maybe<Scalars["ObjectIdType"]>;
    readonly disputeId?: Maybe<Scalars["ObjectIdType"]>;
    readonly ticketId?: Maybe<Scalars["String"]>;
};
export declare type MerchantOneoffPaymentSchemaAmountArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantPaymentCollectorType = "INDIVIDUAL" | "BUSINESS";
export declare type MerchantPaymentCycle = "WEEKLY" | "NORMAL";
export declare type MerchantPaymentDetail = {
    readonly __typename?: "MerchantPaymentDetail";
    readonly accountBalance?: Maybe<CurrencyValue>;
    readonly ledgerAccountBalances?: Maybe<ReadonlyArray<LedgerAccountBalance>>;
    readonly messages?: Maybe<ReadonlyArray<MerchantPaymentWarningMessage>>;
    readonly lineItems?: Maybe<ReadonlyArray<MerchantPaymentLineItem>>;
    readonly lineItemCount?: Maybe<Scalars["Int"]>;
    readonly lineItemTypes?: Maybe<ReadonlyArray<MerchantPaymentLineItemType>>;
    readonly lineItemSearchTypes?: Maybe<ReadonlyArray<LineItemSearchType>>;
    readonly ledgerItemInfo?: Maybe<LedgerItemInfo>;
    readonly payoutHistory?: Maybe<ReadonlyArray<MerchantPayoutHistory>>;
    readonly payoutHistoryCount?: Maybe<Scalars["Int"]>;
    readonly chargeTransaction?: Maybe<ChargeTransactionInfo>;
    readonly connectedChargeProviders?: Maybe<ReadonlyArray<ChargePaymentProviderType>>;
    readonly pendingChargeProviders?: Maybe<ReadonlyArray<ChargePaymentProviderType>>;
    readonly canEditPaymentInfo: Scalars["Boolean"];
    readonly currentProvider?: Maybe<PaymentProvider>;
    readonly allowedProviders: ReadonlyArray<PaymentProvider>;
    readonly nextPayoutTime?: Maybe<Datetime>;
    readonly hasPayoutInProgress: Scalars["Boolean"];
    readonly hasActiveLoan: Scalars["Boolean"];
    readonly hasPaymentInfoNotice: Scalars["Boolean"];
    readonly releasePayoutRequest?: Maybe<ReleasePayoutRequest>;
    readonly personalInfo?: Maybe<PaymentPersonalInfo>;
    readonly businessInfo?: Maybe<PaymentBusinessInfo>;
    readonly infoCollectedForPaymentProvider?: Maybe<InfoCollectedForPaymentProvider>;
    readonly paymentCycle: MerchantPaymentCycle;
    readonly fullyEnrolledInPaymentCycle: Scalars["Boolean"];
};
export declare type MerchantPaymentDetailAccountBalanceArgs = {
    currency: PaymentCurrencyCode;
    balanceType: AccountBalanceType;
};
export declare type MerchantPaymentDetailLineItemsArgs = {
    currency: PaymentCurrencyCode;
    balanceType: AccountBalanceType;
    offset: Scalars["Int"];
    limit: Scalars["Int"];
    startDate?: Maybe<DatetimeInput>;
    endDate?: Maybe<DatetimeInput>;
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<LineItemSearchType>;
    lineItemTypes?: Maybe<ReadonlyArray<LineItemType>>;
};
export declare type MerchantPaymentDetailLineItemCountArgs = {
    currency: PaymentCurrencyCode;
    balanceType: AccountBalanceType;
    startDate?: Maybe<DatetimeInput>;
    endDate?: Maybe<DatetimeInput>;
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<LineItemSearchType>;
    lineItemTypes?: Maybe<ReadonlyArray<LineItemType>>;
};
export declare type MerchantPaymentDetailLedgerItemInfoArgs = {
    currency: PaymentCurrencyCode;
    balanceType: LedgerAccountBalanceType;
    cutoffTime?: Maybe<DatetimeInput>;
    cutoffId?: Maybe<Scalars["String"]>;
    limit: Scalars["Int"];
    startDate?: Maybe<DatetimeInput>;
    endDate?: Maybe<DatetimeInput>;
    includeTotalCount?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantPaymentDetailPayoutHistoryArgs = {
    offset: Scalars["Int"];
    limit: Scalars["Int"];
    startDate?: Maybe<DatetimeInput>;
    endDate?: Maybe<DatetimeInput>;
    provider?: Maybe<PayoutPaymentProviderType>;
};
export declare type MerchantPaymentDetailPayoutHistoryCountArgs = {
    startDate?: Maybe<DatetimeInput>;
    endDate?: Maybe<DatetimeInput>;
    provider?: Maybe<PayoutPaymentProviderType>;
};
export declare type MerchantPaymentDetailChargeTransactionArgs = {
    id: Scalars["ObjectIdType"];
};
export declare type MerchantPaymentLineItem = {
    readonly __typename?: "MerchantPaymentLineItem";
    readonly createdTime: Datetime;
    readonly description: Scalars["String"];
    readonly creditAmount?: Maybe<CurrencyValue>;
    readonly debitAmount?: Maybe<CurrencyValue>;
    readonly type: LineItemType;
};
export declare type MerchantPaymentLineItemType = "POLICY_VIOLATION_FINE" | "MISLEADING_VARIATION_FINE" | "B2B_SALE_FEE" | "WISH_PARCEL_SERVICE_ADJUST_PAYMENT" | "INITIAL_WISHPOST_SHIPPING_REFUND_OFFSET" | "REV_SHARE_ADJUST_PAYMENT" | "WISH_EXPRESS_REBATE_REVERSE" | "DISPUTE_APPROVED" | "WITHHELD_RELEASED" | "LOGISTIC_FEE" | "EARLY_PAYMENT" | "OVERPAY_PAYMENT_AMOUNT" | "QUALITY_REFUND_FINE" | "MERCHANT_HARASSMENT" | "WISHPOST_ADJUSTMENT_PAYMENT" | "WITHHOLD_FUND_FINE" | "EXTERNAL_BOOST_CPA_FEE" | "UNDERPAY_PAYMENT_AMOUNT" | "STRATEGIC_ORDER_REBATE" | "PAID_PLACEMENT_IMPRESSION_FEE" | "LCL_FBW_FEE" | "EARLY_PAYMENT_CANCELLATION" | "DECEPTIVE_FULFILLMENT_FINE" | "STORE_PAYMENT_CANCELLATION" | "ESTIMATED_WISHPOST_SHIPPING" | "PAYMENT" | "MARKETING_REBATE" | "UNFULFILLED_ORDER_FINE" | "PRODUCT_UNTAGGED_MISLEADING" | "FBW_PAYMENT" | "CHINA_POST_SUBSIDY_REVERSE" | "CANCEL_WITHHOLD_PAYMENT" | "COUNTERFEIT_REFUND" | "COVID19_SUBSIDY_REVERSE" | "COLLECTIONS_BOOST_CAMPAIGN_FEE" | "RETURN_LABEL_FEE" | "ONEOFF_FINE" | "WISHPOST_ADJUSTMENT_DEDUCTION" | "FINE_REVERSED" | "PRODUCT_REBATE" | "DOUBLE_DEDUCTION_BOOK_KEEPER" | "LATE_CONFIRMED_FULFILLMENT_FINE" | "FAKE_TRACKING_FINE" | "WITHHOLD_RELEASE" | "REFUNDED" | "PRODUCT_LISTING_FEE" | "CONSOLIDATE_MP_PAYMENT" | "OTHER_DEDUCTION" | "REGISTRATION_REFUND" | "EARLY_PAYMENT_REIMBURSEMENT_FEE" | "ONEOFF" | "EXTERNAL_BOOST_FEE" | "MARKETING_REBATE_REVERSE" | "MERCHANT_INCENTIVE" | "PROMOTED_PRODUCT_DISABLE_FINE" | "INFRACTION_FINE" | "MERCHANT_INCENTIVE_REVERSE" | "RETROACTIVE_REFUND_FOR_LOW_RATED_PRODUCT" | "PRODUCT_BOOST_BALANCE_REFUND" | "NEW_REFUNDED" | "SE_CASH_BACK" | "LEGAL_SETTLEMENT_FINE" | "FBW_FEE" | "MERCHANT_CANCELLATION_FINE" | "EARLY_PAYMENT_DEDUCTION" | "PROMOTION_FEE" | "LEGAL_SETTLEMENT_RESERVED_PENALTY" | "COVID19_SUBSIDY" | "STORE_PAYMENT_DEDUCTION" | "SE_CASH_BACK_REVERSE" | "RETROACTIVE_REFUND_FOR_PROBLEM_PRODUCT" | "FAKE_RATING_FINE" | "ESTIMATED_WISHPOST_SHIPPING_REFUND" | "INITIAL_WISHPOST_SHIPPING_REFUND" | "CN_ORDER_NOT_SHIP_WITH_WISHPOST_FINE" | "INITIAL_WISHPOST_SHIPPING" | "CHINA_POST_SUBSIDY" | "STORE_PAYMENT" | "WISH_EXPRESS_REBATE" | "ONEOFF_ADMIN_TOOL" | "SHIPPED" | "WITHHOLD_PAYMENT" | "INITIAL_WISHPOST_SHIPPING_OFFSET" | "LEGAL_SETTLEMENT_PAID_PENALTY" | "WISH_PARCEL_SERVICE_ADJUST_FEE" | "CONSOLIDATE_MP_FINE" | "UNCONFIRMED_CARRIER_FINE" | "WISH_PARCEL_SERVICE_FEE" | "PAID_PLACEMENT_ENROLLMENT_FEE" | "STRATEGIC_ORDER_REBATE_REVERSE";
export declare type MerchantPaymentLinkInfo = {
    readonly __typename?: "MerchantPaymentLinkInfo";
    readonly text: Scalars["String"];
    readonly url: Scalars["String"];
};
export declare type MerchantPaymentsMutation = {
    readonly __typename?: "MerchantPaymentsMutation";
    readonly updatePaypalSetting?: Maybe<UpdatePayPalSettingMutation>;
    readonly updatePayoneerSetting?: Maybe<UpdatePayoneerSettingMutation>;
    readonly payoneerSignup?: Maybe<PayoneerSignupMutation>;
    readonly resetPayment?: Maybe<ResetReleasePaymentRequestMutation>;
    readonly createChargeTransaction?: Maybe<CreateChargeTransactionMutation>;
    readonly cancelChargeTransaction?: Maybe<CancelChargeTransactionMutation>;
    readonly charge?: Maybe<ChargeMutation>;
};
export declare type MerchantPaymentsMutationUpdatePaypalSettingArgs = {
    input: UpdatePayPalSettingInput;
};
export declare type MerchantPaymentsMutationUpdatePayoneerSettingArgs = {
    input: UpdatePayoneerSettingInput;
};
export declare type MerchantPaymentsMutationResetPaymentArgs = {
    input: ResetReleasePaymentRequestInput;
};
export declare type MerchantPaymentsMutationCreateChargeTransactionArgs = {
    input: CreateChargeTransactionInput;
};
export declare type MerchantPaymentsMutationCancelChargeTransactionArgs = {
    input: CancelChargeTransactionInput;
};
export declare type MerchantPaymentsMutationChargeArgs = {
    input: ChargeInput;
};
export declare type MerchantPaymentsService = {
    readonly __typename?: "MerchantPaymentsService";
    readonly paymentInfo?: Maybe<MerchantPaymentDetail>;
    readonly currentMerchant?: Maybe<MerchantPaymentDetail>;
};
export declare type MerchantPaymentsServicePaymentInfoArgs = {
    merchantId: Scalars["ObjectIdType"];
};
export declare type MerchantPaymentWarningMessage = {
    readonly __typename?: "MerchantPaymentWarningMessage";
    readonly title?: Maybe<Scalars["String"]>;
    readonly text?: Maybe<Scalars["String"]>;
    readonly sentiment?: Maybe<SentimentType>;
    readonly link?: Maybe<MerchantPaymentLinkInfo>;
};
export declare type MerchantPayoutHistory = {
    readonly __typename?: "MerchantPayoutHistory";
    readonly id: Scalars["String"];
    readonly payoutDate: Datetime;
    readonly payoutProvider: PaymentProvider;
    readonly merchantFacingState: MerchantFacingPayoutState;
    readonly currency: PaymentCurrencyCode;
    readonly totalAmount: CurrencyValue;
    readonly description?: Maybe<MerchantPayoutHistoryDescription>;
    readonly rebateAmount?: Maybe<CurrencyValue>;
};
export declare type MerchantPayoutHistoryDescription = {
    readonly __typename?: "MerchantPayoutHistoryDescription";
    readonly title?: Maybe<Scalars["String"]>;
    readonly text?: Maybe<Scalars["String"]>;
};
export declare type MerchantPolicyTierFactorSettings = {
    readonly __typename?: "MerchantPolicyTierFactorSettings";
    readonly factor: PolicyFactor;
    readonly exemptions: ReadonlyArray<Maybe<MerchantPriviledge>>;
};
export declare type MerchantPolicyTierSchema = {
    readonly __typename?: "MerchantPolicyTierSchema";
    readonly tier: MerchantTier;
    readonly policyFactorSettings: ReadonlyArray<Maybe<MerchantPolicyTierFactorSettings>>;
};
export declare type MerchantPreorder = {
    readonly __typename?: "MerchantPreorder";
    readonly isPreorderMerchant: Scalars["Boolean"];
    readonly productsAreSyncing: Scalars["Boolean"];
};
export declare type MerchantPriviledge = "WAIVE_BAN_MERCHANT" | "WAIVE_ISSUE_FINE" | "WAIVE_PRODUCT_TAKEDOWN" | "WAIVE_PAYMENT_WITHHOLD" | "WAIVE_CREATE_WARNING" | "WAIVE_IMPRESSION_SUSPENSION";
export declare type MerchantRatingStats = {
    readonly __typename?: "MerchantRatingStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly averageProductRating?: Maybe<Scalars["Float"]>;
};
export declare type MerchantRefundStats = {
    readonly __typename?: "MerchantRefundStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly refundRate?: Maybe<Scalars["Float"]>;
};
export declare type MerchantSchema = {
    readonly __typename?: "MerchantSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly accountManager?: Maybe<UserSchema>;
    readonly originCountry?: Maybe<Country>;
    readonly suspectedCountry?: Maybe<Country>;
    readonly restrictedProductDefaultCountry?: Maybe<Country>;
    readonly canAccessRestrictedProduct: Scalars["Boolean"];
    readonly canAccessFinalSale: Scalars["Boolean"];
    readonly canAccessHome: Scalars["Boolean"];
    readonly restrictedProductRegions?: Maybe<ReadonlyArray<RestrictedProductRegion>>;
    readonly merchantPolicyTier?: Maybe<MerchantPolicyTierSchema>;
    readonly displayName: Scalars["String"];
    readonly onVacationMode: Scalars["Boolean"];
    readonly vacation: VacationSchema;
    readonly signupTime: Datetime;
    readonly revShare: Scalars["Float"];
    readonly canManageShipping: Scalars["Boolean"];
    readonly shippingSettings?: Maybe<ReadonlyArray<ShippingSettingsSchema>>;
    readonly merchantTermsAgreed?: Maybe<MerchantTermsAgreedSchema>;
    readonly useShopifyShippingRate: Scalars["Boolean"];
    readonly standardWarehouseId: Scalars["ObjectIdType"];
    readonly primaryCurrency: PaymentCurrencyCode;
    readonly usdConversionRate: Scalars["Float"];
    readonly hasSetupPaymentInfo: Scalars["Boolean"];
    readonly storeStats: MerchantStats;
    readonly wishSellerStandard: MerchantWishSellerStandardDetails;
    readonly shopify?: Maybe<ShopifySchema>;
    readonly state: CommerceMerchantState;
    readonly canUseVacationMode: Scalars["Boolean"];
    readonly inEuComplianceScope: Scalars["Boolean"];
    readonly hasEuComplianceImpressionBlock: Scalars["Boolean"];
    readonly countryOfDomicile?: Maybe<Country>;
    readonly businessName?: Maybe<Scalars["String"]>;
    readonly businessAddress?: Maybe<AddressSchema>;
    readonly countryDetails?: Maybe<MerchantCountryDetailsSchema>;
    readonly daysToFulfill: Scalars["Int"];
    readonly preorder: MerchantPreorder;
    readonly branding: BrandingSchema;
    readonly isMerchantPlus: Scalars["Boolean"];
    readonly priceDropEnabled: Scalars["Boolean"];
    readonly marketing: MarketingMerchantPropertySchema;
    readonly shippingOrigins: ReadonlyArray<ShippingOriginSettings>;
    readonly tax?: Maybe<MerchantTaxSchema>;
    readonly isStoreMerchant: Scalars["Boolean"];
    readonly isPayable: Scalars["Boolean"];
    readonly isCnMerchant: Scalars["Boolean"];
    readonly maxDeliveryDays: Scalars["Int"];
    readonly isUnityEnabled: Scalars["Boolean"];
    readonly signupSource?: Maybe<SignupSource>;
    readonly proofOfIdentity?: Maybe<ReadonlyArray<MerchantFileSchema>>;
    readonly sellerVerification: SellerVerificationSchema;
    readonly senderAddresses: ReadonlyArray<MerchantSenderAddressSchema>;
    readonly warehouses?: Maybe<ReadonlyArray<MerchantWarehouseSchema>>;
    readonly fulfilledByWish: MerchantFbwSchema;
    readonly fulfillmentExtension: MerchantFulfillmentExtensionSchema;
    readonly wps?: Maybe<MerchantWpsSchema>;
    readonly preferredWeightUnit?: Maybe<WeightUnit>;
    readonly preferredLengthUnit?: Maybe<LengthUnit>;
    readonly isWhiteGlove: Scalars["Boolean"];
    readonly canAccessEarlyPayment: Scalars["Boolean"];
    readonly canAccessPriceDrop: Scalars["Boolean"];
    readonly hasActivePriceDropOffers: Scalars["Boolean"];
    readonly hasReducedRevShare: Scalars["Boolean"];
    readonly lead: UserSchema;
    readonly users: ReadonlyArray<UserSchema>;
    readonly standing?: Maybe<MerchantStandingCode>;
    readonly exp: ExpSchema;
    readonly euVatTax?: Maybe<EuvatTaxSchema>;
    readonly isBba?: Maybe<Scalars["Boolean"]>;
    readonly bypassProductRestrictions?: Maybe<ReadonlyArray<TaggingViolationSubcategory>>;
    readonly productListingPlan?: Maybe<ProductListingPlanHub>;
    readonly isWishBlueSelfInventory: Scalars["Boolean"];
    readonly isFactory: Scalars["Boolean"];
};
export declare type MerchantSchemaShippingSettingsArgs = {
    enabled?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantSchemaWarehousesArgs = {
    id?: Maybe<Scalars["String"]>;
};
export declare type MerchantSchemaUsersArgs = {
    includeLead?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantSenderAddressMutations = {
    readonly __typename?: "MerchantSenderAddressMutations";
    readonly upsertMerchantSenderAddress: UpsertMerchantSenderAddressMutation;
    readonly deleteMerchantSenderAddress: DeleteMerchantSenderAddressMutation;
};
export declare type MerchantSenderAddressMutationsUpsertMerchantSenderAddressArgs = {
    input: UpsertMerchantSenderAddressInput;
};
export declare type MerchantSenderAddressMutationsDeleteMerchantSenderAddressArgs = {
    input: DeleteMerchantSenderAddressInput;
};
export declare type MerchantSenderAddressSchema = {
    readonly __typename?: "MerchantSenderAddressSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly warehouseName: Scalars["String"];
    readonly address: AddressSchema;
    readonly isDefault: Scalars["Boolean"];
};
export declare type MerchantServiceSchema = {
    readonly __typename?: "MerchantServiceSchema";
    readonly merchant?: Maybe<MerchantSchema>;
    readonly mainUser?: Maybe<UserSchema>;
    readonly vipoutlet?: Maybe<MerchantSchema>;
    readonly merchants?: Maybe<ReadonlyArray<MerchantSchema>>;
};
export declare type MerchantServiceSchemaMerchantArgs = {
    id?: Maybe<Scalars["ObjectIdType"]>;
    userId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type MerchantServiceSchemaMainUserArgs = {
    merchantId: Scalars["ObjectIdType"];
};
export declare type MerchantServiceSchemaMerchantsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<MerchantSort>;
    states?: Maybe<ReadonlyArray<CommerceMerchantState>>;
    name?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["ObjectIdType"]>;
    bdRep?: Maybe<Scalars["ObjectIdType"]>;
    isMerchantPlus?: Maybe<Scalars["Boolean"]>;
    query?: Maybe<Scalars["String"]>;
};
export declare type MerchantSignupInput = {
    readonly emailAddress: Scalars["String"];
    readonly storeName: Scalars["String"];
    readonly password: Scalars["String"];
    readonly source?: Maybe<MerchantSignupSourceType>;
    readonly bdSignupCode?: Maybe<Scalars["String"]>;
    readonly salesforceLeadId?: Maybe<Scalars["String"]>;
    readonly salesforceCmCat?: Maybe<Scalars["String"]>;
    readonly googleClickId?: Maybe<Scalars["String"]>;
    readonly googleAdsGroupId?: Maybe<Scalars["String"]>;
    readonly landingSource?: Maybe<Scalars["String"]>;
    readonly landingSourceSubpage?: Maybe<Scalars["String"]>;
    readonly invite?: Maybe<Scalars["String"]>;
    readonly referralId?: Maybe<Scalars["String"]>;
    readonly utmSource?: Maybe<Scalars["String"]>;
    readonly utmCampaign?: Maybe<Scalars["String"]>;
    readonly utmTerm?: Maybe<Scalars["String"]>;
    readonly utmContent?: Maybe<Scalars["String"]>;
    readonly deviceId?: Maybe<Scalars["String"]>;
    readonly deviceName?: Maybe<Scalars["String"]>;
    readonly paypalMerchantId?: Maybe<Scalars["String"]>;
    readonly greenChannelCode?: Maybe<Scalars["String"]>;
    readonly merchantInvitationCode?: Maybe<Scalars["String"]>;
    readonly captchaToken?: Maybe<Scalars["String"]>;
    readonly captchaCode?: Maybe<Scalars["String"]>;
    readonly existingStoreUrl?: Maybe<Scalars["String"]>;
};
export declare type MerchantSignupMutation = {
    readonly __typename?: "MerchantSignupMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly shouldRedirectCnMerchant?: Maybe<Scalars["Boolean"]>;
    readonly userId?: Maybe<Scalars["ObjectIdType"]>;
    readonly session?: Maybe<Scalars["String"]>;
};
export declare type MerchantSignupSendPhoneVerificationInput = {
    readonly newPhoneNumber: Scalars["String"];
};
export declare type MerchantSignupSendPhoneVerificationMutation = {
    readonly __typename?: "MerchantSignupSendPhoneVerificationMutation";
    readonly message?: Maybe<Scalars["String"]>;
    readonly ok: Scalars["Boolean"];
};
export declare type MerchantSignupSourceType = "SIGNUP_GREEN_CHANNEL" | "SIGNUP_V4" | "SIGNUP_V5" | "SIGNUP_V3" | "SIGNUP_MOBILE" | "SIGNUP_MERCHANT_PLUS" | "SIGNUP_EXPRESS";
export declare type MerchantSort = {
    readonly field: MerchantSortFieldType;
    readonly order: SortOrderType;
};
export declare type MerchantSortFieldType = "MERCHANT_ID" | "NAME";
export declare type MerchantStandingCode = "ACTIVE" | "PLATINUM" | "SILVER" | "GOLD" | "UNDER_REVIEW";
export declare type MerchantStats = {
    readonly __typename?: "MerchantStats";
    readonly totalSold: Scalars["Int"];
    readonly totalImpressions: Scalars["Int"];
    readonly totalWishes: Scalars["Int"];
    readonly totalGmv: CurrencyValue;
    readonly lastThirtyDayGmv: CurrencyValue;
    readonly updateTime?: Maybe<Datetime>;
    readonly marketing: MarketingStats;
    readonly totals: MerchantTotalStats;
    readonly daily: ReadonlyArray<MerchantTotalStats>;
    readonly tracking?: Maybe<MerchantTrackingStats>;
    readonly delivery?: Maybe<MerchantDeliveryStats>;
    readonly refunds?: Maybe<MerchantRefundStats>;
    readonly rating?: Maybe<MerchantRatingStats>;
    readonly cs?: Maybe<MerchantCsStats>;
};
export declare type MerchantStatsTotalsArgs = {
    days?: Maybe<Scalars["Int"]>;
    coreMetricsOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantStatsDailyArgs = {
    days?: Maybe<Scalars["Int"]>;
    coreMetricsOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantTaxIdentificationBusinessType = "S_CORP" | "TRUST_OR_ESTATE" | "PARTNERSHIP" | "C_CORP" | "LCC";
export declare type MerchantTaxIdentificationMutations = {
    readonly __typename?: "MerchantTaxIdentificationMutations";
    readonly upsertMerchantTaxIdentification: UpsertMerchantTaxIdentificationMutation;
};
export declare type MerchantTaxIdentificationMutationsUpsertMerchantTaxIdentificationArgs = {
    input: UpsertMerchantTaxIdentificationInput;
};
export declare type MerchantTaxIdentificationPaymentReceiverEntity = "US" | "NON_US";
export declare type MerchantTaxIdentificationSelfIdentityClassification = "INDIVIDUAL" | "BUSINESS";
export declare type MerchantTaxSchema = {
    readonly __typename?: "MerchantTaxSchema";
    readonly settings?: Maybe<ReadonlyArray<TaxSetting>>;
    readonly hasConfiguredTaxesBefore: Scalars["Boolean"];
    readonly enrollableCountries: ReadonlyArray<Country>;
};
export declare type MerchantTermsActionEnum = "DISAGREE" | "AGREE" | "VIEW";
export declare type MerchantTermsAgreedMutations = {
    readonly __typename?: "MerchantTermsAgreedMutations";
    readonly acceptTermsOfService: AcceptTermsOfService;
    readonly acceptEuComplianceTermsOfService: AcceptEuComplianceTermsOfService;
    readonly viewTermsOfService: ViewTermsOfService;
    readonly viewTermsOfServiceById: ViewTermsOfServiceById;
    readonly actOnWpsTermsOfService: MerchantWpsTermsOfServiceMutation;
};
export declare type MerchantTermsAgreedMutationsAcceptTermsOfServiceArgs = {
    input: AcceptTermsOfServiceInput;
};
export declare type MerchantTermsAgreedMutationsViewTermsOfServiceByIdArgs = {
    input: ViewTermsOfServiceByIdInput;
};
export declare type MerchantTermsAgreedMutationsActOnWpsTermsOfServiceArgs = {
    input: MerchantWpsTermsOfServiceInput;
};
export declare type MerchantTermsAgreedSchema = {
    readonly __typename?: "MerchantTermsAgreedSchema";
    readonly agreedToTermsOfService: Scalars["Boolean"];
    readonly agreedToRealNameAuth?: Maybe<Scalars["Boolean"]>;
    readonly agreedToEuComplianceTos?: Maybe<Scalars["Boolean"]>;
    readonly wpsTermsOfService?: Maybe<MerchantWpsTermsOfServiceSchema>;
};
export declare type MerchantTermsOfServiceAgreementSchema = {
    readonly __typename?: "MerchantTermsOfServiceAgreementSchema";
    readonly state?: Maybe<MerchantTosAgreementStateType>;
};
export declare type MerchantTermsOfServiceSchema = {
    readonly __typename?: "MerchantTermsOfServiceSchema";
    readonly latestVersion: Scalars["Int"];
};
export declare type MerchantTier = "WISH_STORE_TRUST" | "SUSPICIOUS" | "NON_CN_ERP_REFERRED" | "CN_BRAND_OWNER" | "US_SHOPIFY_REFERRED" | "LATAM_BD_BRAND_OWNER" | "CN_DEFAULT" | "EU_DEFAULT" | "LATAM_BD_REFERRED" | "CN_BD_REFERRED" | "NON_CN_DEFAULT" | "US_CONTROL" | "EU_BD_REFERRED" | "PHANTOM" | "PROMOTED_WHITELIST_FINE_EXEMPTION" | "US_DELIVERR_REFERRED" | "US_BD_REFERRED" | "NON_CN_BRAND_OWNER" | "US_PAYPAL_REFERRED" | "CPG" | "CN_ERP_REFERRED" | "US_BRAND_OWNER" | "NOT_ENROLL" | "SELF_INVENTORY" | "US_DEFAULT" | "NON_CN_BD_REFERRED" | "EU_BRAND_OWNER" | "PROBATION";
export declare type MerchantTodoItemSentiment = "INFO" | "POSITIVE" | "WARNING" | "NEGATIVE";
export declare type MerchantTodoItemType = "SETUP_TAX_INFO" | "REJECTED_VIDEOS" | "REVIEW_CURRENCY" | "EU_PRODUCT_COMPLIANCE" | "ENABLE_2FA" | "RESELLER_AGREEMENT" | "PRICE_DROP_NEW_OFFERS" | "REAUTHENTICATION_ATO" | "ADD_PAYMENT" | "COMPLETE_EU_VAT_TAX_QUESTIONNAIRE" | "ADD_WAREHOUSE" | "BIND_WECHAT" | "WE_REAPPLICATION_ELIGIBLE" | "PRICE_DROP_VIEW_ONGOING_CAMPAIGNS" | "TAX_VERIFICATION_FAILED" | "UPLOAD_NEW_PRODUCTS" | "ENROLL_PRODUCTS_IN_RETURNS" | "PRE_ORDER_UNFULFILLED_ORDER" | "GBP_CURRENCY_CODE_MIGRATION" | "APPLY_RESTRICTED_PRODUCT_REQUEST" | "REAUTHENTICATION_REGINFO" | "EUR_CURRENCY_CODE_MIGRATION" | "JOIN_WISH_EXPRESS" | "BRL_CURRENCY_CODE_MIGRATION" | "CURRENCY_CODE_MIGRATION" | "REAUTHENTICATION_SELLER_PROFILE" | "NON_CN_UPLOAD_NEW_PRODUCTS" | "REAUTHENTICATION_KYC_PROFILE" | "VERIFY_PRODUCT_BRANDS" | "PRICE_DROP_UNCOMPETITIVE_CAMPAIGN" | "ACCEPT_TERMS_OF_SERVICE";
export declare type MerchantToFactoryConversionMutation = {
    readonly __typename?: "MerchantToFactoryConversionMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly ok: Scalars["Boolean"];
};
export declare type MerchantTosAgreementStateType = "DISAGREED" | "AGREED" | "IMPLICIT_AGREED";
export declare type MerchantTotalStats = {
    readonly __typename?: "MerchantTotalStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly gmv: CurrencyValue;
    readonly impressions: Scalars["BigInt"];
    readonly pageViews: Scalars["BigInt"];
    readonly addToCarts: Scalars["Int"];
    readonly orders: Scalars["Int"];
};
export declare type MerchantTrackingStats = {
    readonly __typename?: "MerchantTrackingStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly validTrackingRate?: Maybe<Scalars["Float"]>;
    readonly lateConfirmedFulfillmentRate?: Maybe<Scalars["Float"]>;
    readonly averageFulfillmentTime?: Maybe<Timedelta>;
};
export declare type MerchantUserGateAllowAll = {
    readonly __typename?: "MerchantUserGateAllowAll";
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantUserGateAllowAllInput = {
    readonly name: Scalars["String"];
};
export declare type MerchantUserGateAllowMerchants = {
    readonly __typename?: "MerchantUserGateAllowMerchants";
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantUserGateAllowMerchantsInput = {
    readonly name: Scalars["String"];
    readonly merchantIds: ReadonlyArray<Scalars["ObjectIdType"]>;
};
export declare type MerchantUserGateAllowUsers = {
    readonly __typename?: "MerchantUserGateAllowUsers";
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantUserGateAllowUsersInput = {
    readonly name: Scalars["String"];
    readonly userIds: ReadonlyArray<Scalars["ObjectIdType"]>;
};
export declare type MerchantUserGateMutations = {
    readonly __typename?: "MerchantUserGateMutations";
    readonly allowUsers?: Maybe<MerchantUserGateAllowUsers>;
    readonly allowMerchants?: Maybe<MerchantUserGateAllowMerchants>;
    readonly allowAll?: Maybe<MerchantUserGateAllowAll>;
};
export declare type MerchantUserGateMutationsAllowUsersArgs = {
    input: MerchantUserGateAllowUsersInput;
};
export declare type MerchantUserGateMutationsAllowMerchantsArgs = {
    input: MerchantUserGateAllowMerchantsInput;
};
export declare type MerchantUserGateMutationsAllowAllArgs = {
    input: MerchantUserGateAllowAllInput;
};
export declare type MerchantWarehouseMutations = {
    readonly __typename?: "MerchantWarehouseMutations";
    readonly upsertWarehouse?: Maybe<UpsertMerchantWarehouseMutation>;
    readonly deleteWarehouse?: Maybe<DeleteMerchantWarehouseMutation>;
    readonly submitWarehouseVerificationRequest?: Maybe<SubmitWarehouseVerificationRequestMutation>;
};
export declare type MerchantWarehouseMutationsUpsertWarehouseArgs = {
    input: UpsertWarehouseInput;
};
export declare type MerchantWarehouseMutationsDeleteWarehouseArgs = {
    input: DeleteMerchantWarehouseInput;
};
export declare type MerchantWarehouseMutationsSubmitWarehouseVerificationRequestArgs = {
    input: SubmitWarehouseVerificationRequestInput;
};
export declare type MerchantWarehouseSchema = {
    readonly __typename?: "MerchantWarehouseSchema";
    readonly id: Scalars["String"];
    readonly unitId: Scalars["String"];
    readonly address?: Maybe<AddressSchema>;
    readonly weekStats?: Maybe<ReadonlyArray<MerchantWarehouseWeekStatsSchema>>;
    readonly weekStatsCount: Scalars["Int"];
    readonly enabledCountries: ReadonlyArray<Country>;
    readonly verificationState?: Maybe<WarehouseVerificationState>;
    readonly verificationRequest?: Maybe<WarehouseVerificationRequestSchema>;
};
export declare type MerchantWarehouseSchemaWeekStatsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<MerchantWarehouseWeekStatsSort>;
    startDate?: Maybe<DatetimeInput>;
    endDate?: Maybe<DatetimeInput>;
};
export declare type MerchantWarehouseSchemaWeekStatsCountArgs = {
    startDate?: Maybe<DatetimeInput>;
    endDate?: Maybe<DatetimeInput>;
};
export declare type MerchantWarehouseWeekStatsSchema = {
    readonly __typename?: "MerchantWarehouseWeekStatsSchema";
    readonly lateDeliveryRate?: Maybe<Scalars["Float"]>;
    readonly maxExpectedGmv: CurrencyValue;
    readonly expectedDeliveries: Scalars["Int"];
    readonly lateDeliveries: Scalars["Int"];
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly isLateDeliveryRateHigh?: Maybe<Scalars["Boolean"]>;
    readonly isLateDeliveryRateAtRisk?: Maybe<Scalars["Boolean"]>;
    readonly merchantId: Scalars["ObjectIdType"];
};
export declare type MerchantWarehouseWeekStatsSchemaLateDeliveryRateArgs = {
    orderPolicyType?: Maybe<OrderPolicyType>;
};
export declare type MerchantWarehouseWeekStatsSchemaIsLateDeliveryRateHighArgs = {
    orderPolicyType?: Maybe<OrderPolicyType>;
};
export declare type MerchantWarehouseWeekStatsSchemaIsLateDeliveryRateAtRiskArgs = {
    orderPolicyType?: Maybe<OrderPolicyType>;
};
export declare type MerchantWarehouseWeekStatsSort = {
    readonly field: MerchantWarehouseWeekStatsSortFieldType;
    readonly order: SortOrderType;
};
export declare type MerchantWarehouseWeekStatsSortFieldType = "START_DATE";
export declare type MerchantWarningAuditAction = "CLAIM" | "REVERT" | "BATCH_CLAIM" | "CONFIRM";
export declare type MerchantWarningAuditRevertReason = "POLICY_UPDATE" | "INCORRECTED_DATA" | "AGENT_ERROR";
export declare type MerchantWarningAuditStatus = "REQUIRE_AUDIT" | "CONFIRMED" | "REVERTED";
export declare type MerchantWarningClaimStatus = "CLAIMED" | "NOT_CLAIMED" | "CLAIMED_BY_ME" | "ALL";
export declare type MerchantWarningMutations = {
    readonly __typename?: "MerchantWarningMutations";
    readonly updateAuditQueueWarning?: Maybe<UpdateAuditQueueWarning>;
};
export declare type MerchantWarningMutationsUpdateAuditQueueWarningArgs = {
    input?: Maybe<UpdateAuditQueueWarningInput>;
};
export declare type MerchantWarningProofDisputeStatus = "DISPUTING" | "DISPUTE_FAILED" | "NOT_DISPUTED" | "DISPUTE_SUCCESS";
export declare type MerchantWarningProofSchema = {
    readonly __typename?: "MerchantWarningProofSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly type: MerchantWarningProofType;
    readonly disputeStatus: MerchantWarningProofDisputeStatus;
    readonly product?: Maybe<ProductSchema>;
};
export declare type MerchantWarningProofType = "MERCHANT" | "PRODUCT" | "VARIATION" | "PRODUCT_RATING" | "TICKET" | "ORDER";
export declare type MerchantWarningReason = "INVALID_TRACKING_NUMBERS" | "HIGH_CHARGEBACK_RATIO" | "REQUEST_MONEY" | "PRODUCT_HIGH_REFUND_RATIO" | "VIOLATE_TS_POLICY" | "DUPLICATE_PRODUCTS" | "HIGH_GMV_FROM_GAMING_AUDIT" | "INVALID_EU_RESPONSIBLE_PERSON" | "FAKE_RATING" | "DEP_BAIT_VARIABLE_PRICING" | "DUPLICATE_ACCOUNTS" | "DISINGENUOUS_CUSTOMER_SERVICE" | "REQUEST_USER_EMAIL" | "EXTREMELY_HIGH_PRICE_SPREAD" | "HIGH_IP_INFRINGEMENT" | "HIGH_GMV_FROM_GAMING_BAN" | "HIGH_CHARGEBACK_AND_FRAUD_REFUND_RATIO" | "WISHPOST_NEGATIVE_BALANCE" | "CN_PROHIBITED_PRODUCTS" | "PRODUCT_LOW_RATING" | "FINE_UPDATE_TO_COUNTERFEIT" | "RELATED_ACCOUNT_IS_BANNED" | "VIOLATE_POLICY" | "DEP_FINE_DISABLE_PROMOTED_PRODUCT_FOR_COUNTRY" | "UNFULFILLED_ORDER" | "HIGH_GMV_FROM_GAMING_FREEZE" | "WISH_EXPRESS_POLICY_MERCHANT" | "EMPTY_PACKAGES" | "VIOLATION_OF_POLICY_TIER" | "FAKE_TRACKING" | "CS_LATE_RESPONSE_RATE" | "LEGAL_TRO_TAKEDOWN" | "WAREHOUSE_FULFILLMENT_POLICY_VIOLATION" | "WISH_EXPRESS_POLICY_VIOLATION" | "REPEAT_IP_INFRINGEMENT_ON_BRAND_OWNER" | "MERCHANT_CONTACT_INFO_INVALID" | "HIGH_AUTO_REFUND" | "MERCHANT_HIGH_CANCEL_ORDER_RATE" | "LATE_CONFIRMED_FULFILLMENT_VIOLATION" | "WISH_EXPRESS_POLICY_PRODUCT" | "BAD_CUSTOMER_SERVICE" | "PRODUCT_HIGH_QUALITY_REFUND_RATIO" | "MISLEADING_VARIATION" | "FINE_FOR_COUNTERFEIT_GOODS" | "MERCHANT_HIGH_REFUND_EAT_COST" | "PRODUCT_GEOBLOCK" | "PRODUCT_IS_INAPPROPRIATE" | "BRANDED_PRODUCT_GEOBLOCK" | "DEP_FINE_DISABLE_PROMOTED_PRODUCT" | "UNCONFIRMED_TRACKING_NUMBERS" | "FINE_WISH_EXPRESS_POLICY_VIOLATION" | "PRODUCT_HIGH_REFUND_RATIO_NO_REMOVE" | "RESPOND_TO_ADMIN" | "STRIKE_BASED_HIGH_RISK_PROHIBITED" | "PENALTY_FOR_AUTO_REFUND" | "FINAL_JUDGEMENT_ORDER" | "CONFIRMED_DELIVERY_POLICY" | "BAN_EARLY_STAGE_MERCHANT" | "HIGH_REFUND_RATIO" | "TAKE_USER_OUTSIDE_WISH" | "POLICY_TIER_DEMOTION" | "MERCHANT_HIGH_QUALITY_REFUND_RATIO" | "REPEAT_PRODUCT_SWAPPING" | "MERCHANT_CANCELLATION_VIOLATION" | "WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION" | "HIGH_GMV_FROM_MISLEADING_PRODUCTS" | "PRODUCT_HIGH_CANCEL_ORDER_RATE" | "COUNTERFEIT_GOODS" | "CS_LOW_CSAT_SCORE" | "LATE_FULFILLMENT_RATE" | "FINE_PRODUCT_SWAPPED" | "DECEPTIVE_FULFILLMENT" | "VIOLATION_OF_TERMS" | "STORE_VALIDATION_INCOMPLETE" | "TAX_SETTING_NOT_UPDATED" | "MERCHANT_HARASSMENT" | "REUPLOADING_COUNTERFEITS" | "PRODUCT_LOW_RATING_NO_REMOVE" | "SUSPECTED_FRAUD";
export declare type MerchantWarningReasonSchema = {
    readonly __typename?: "MerchantWarningReasonSchema";
    readonly reason: MerchantWarningReason;
    readonly text: Scalars["String"];
};
export declare type MerchantWarningSchema = {
    readonly __typename?: "MerchantWarningSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly fineAmount?: Maybe<CurrencyValue>;
    readonly reason: MerchantWarningReason;
    readonly adminReasonText?: Maybe<Scalars["String"]>;
    readonly merchantReasonText?: Maybe<Scalars["String"]>;
    readonly counterfeitReasonText?: Maybe<Scalars["String"]>;
    readonly banned?: Maybe<Scalars["Boolean"]>;
    readonly lastUpdate: Datetime;
    readonly createdTime: Datetime;
    readonly creatorName?: Maybe<Scalars["String"]>;
    readonly proofs: ReadonlyArray<MerchantWarningProofSchema>;
    readonly fine?: Maybe<MerchantFineSchema>;
    readonly counterfeitBrand?: Maybe<BrandSchema>;
    readonly merchant?: Maybe<MerchantSchema>;
    readonly product?: Maybe<ProductSchema>;
    readonly productGmvAtAudit?: Maybe<CurrencyValue>;
    readonly claimedBy?: Maybe<UserSchema>;
    readonly auditStatus?: Maybe<MerchantWarningAuditStatus>;
};
export declare type MerchantWarningSchemaFineAmountArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type MerchantWarningSort = {
    readonly field: MerchantWarningSortFieldType;
    readonly order: SortOrderType;
};
export declare type MerchantWarningSortFieldType = "CREATED_TIME" | "PRODUCT_GMV_AT_AUDIT" | "LAST_UPDATE";
export declare type MerchantWarningState = "AWAITING_AUTH_TAGGING_HIGH_GMV" | "US_BD_REVIEW_PAYMENT" | "CN_BD_REVIEW_PAYMENT" | "REQUEST_PAYMENT" | "AWAITING_ADMIN" | "REQUIRES_ADMIN_REVIEW" | "AWAITING_ADMIN_BOT" | "CLOSED" | "CANCELLED" | "NEW" | "AWAITING_MERCHANT" | "AWAITING_AUTH_TAGGING_LOW_GMV";
export declare type MerchantWishSellerStandardDetails = {
    readonly __typename?: "MerchantWishSellerStandardDetails";
    readonly stats?: Maybe<WishSellerStandardStats>;
    readonly level?: Maybe<WssMerchantLevelType>;
};
export declare type MerchantWpsSchema = {
    readonly __typename?: "MerchantWPSSchema";
    readonly enabledDestinationCountries: ReadonlyArray<Country>;
    readonly enabledOriginCountries: ReadonlyArray<Country>;
};
export declare type MerchantWpsTermsOfServiceInput = {
    readonly merchantAction: MerchantTermsActionEnum;
    readonly tos: WpsTermsTypeEnum;
};
export declare type MerchantWpsTermsOfServiceMutation = {
    readonly __typename?: "MerchantWPSTermsOfServiceMutation";
    readonly ok: Scalars["Boolean"];
};
export declare type MerchantWpsTermsOfServiceSchema = {
    readonly __typename?: "MerchantWPSTermsOfServiceSchema";
    readonly viewedWpsTos: Scalars["Boolean"];
    readonly viewedUpsTos: Scalars["Boolean"];
    readonly agreedWpsTos: Scalars["Boolean"];
    readonly agreedUpsTos: Scalars["Boolean"];
};
export declare type MfpServiceMutations = {
    readonly __typename?: "MFPServiceMutations";
    readonly upsertDiscountCampaign: UpsertDiscountCampaignMutation;
    readonly upsertLightningDealCampaign: UpsertLightningDealCampaignMutation;
    readonly cancelMfpCampaign: CancelMfpCampaign;
};
export declare type MfpServiceMutationsUpsertDiscountCampaignArgs = {
    input: UpsertDiscountCampaignInput;
};
export declare type MfpServiceMutationsUpsertLightningDealCampaignArgs = {
    input: UpsertLightningDealCampaignInput;
};
export declare type MfpServiceMutationsCancelMfpCampaignArgs = {
    input: CancelMfpCampaignInput;
};
export declare type MobilePlatformType = "ANDROID" | "IOS";
export declare type ModifyTrackingError = {
    readonly __typename?: "ModifyTrackingError";
    readonly orderId: Scalars["ObjectIdType"];
    readonly message: Scalars["String"];
};
export declare type ModifyTrackingOrderInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly trackingId: Scalars["String"];
    readonly providerId: Scalars["Int"];
    readonly shipNote?: Maybe<Scalars["String"]>;
    readonly originCountryCode: CountryCode;
};
export declare type ModifyTrackingOrders = {
    readonly __typename?: "ModifyTrackingOrders";
    readonly modifyTrackingCount: Scalars["Int"];
    readonly errorMessages?: Maybe<ReadonlyArray<ModifyTrackingError>>;
};
export declare type ModifyWpsTrackingIdInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly shippingOptionId: Scalars["String"];
    readonly additionalServiceOptions?: Maybe<ReadonlyArray<WpsAvailableServices>>;
};
export declare type ModifyWpsTrackingIdMutation = {
    readonly __typename?: "ModifyWPSTrackingIDMutation";
    readonly ok: Scalars["Boolean"];
    readonly wpsShipmentId?: Maybe<Scalars["String"]>;
    readonly trackingId?: Maybe<Scalars["String"]>;
    readonly providerId?: Maybe<Scalars["Int"]>;
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type MsrCategory = "ELECTRONICS" | "PPE" | "ELECTRICAL_PRODUCTS" | "TOYS";
export declare type NotificationsServiceSchema = {
    readonly __typename?: "NotificationsServiceSchema";
    readonly notificationCount: Scalars["Int"];
};
export declare type NotificationsServiceSchemaNotificationCountArgs = {
    viewed?: Maybe<Scalars["Boolean"]>;
};
export declare type NotifyPasswordRecoveryMutation = {
    readonly __typename?: "NotifyPasswordRecoveryMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly ok: Scalars["Boolean"];
};
export declare type NotifyPasswordRecoveryMutationInput = {
    readonly email: Scalars["String"];
};
export declare type OffsiteBoost = {
    readonly __typename?: "OffsiteBoost";
    readonly enabled: Scalars["Boolean"];
    readonly dailyBudget: CurrencyValue;
    readonly maxDailyBudget: CurrencyValue;
    readonly minDailyBudget: CurrencyValue;
    readonly chargingMethod: ExternalBoostChargingMethod;
    readonly statsAvailableDate: Datetime;
};
export declare type OffsiteBoostDailyStats = {
    readonly __typename?: "OffsiteBoostDailyStats";
    readonly date: Datetime;
    readonly clicks: Scalars["Int"];
    readonly orders: Scalars["Int"];
    readonly gmv: CurrencyValue;
    readonly attributed?: Maybe<ExternalBoostAttributedStats>;
    readonly spend: CurrencyValue;
};
export declare type OffsiteBoostPropertyInput = {
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly dailyBudget?: Maybe<CurrencyInput>;
};
export declare type OffsiteBoostStats = {
    readonly __typename?: "OffsiteBoostStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly daily: ReadonlyArray<OffsiteBoostDailyStats>;
};
export declare type OnboardingSchema = {
    readonly __typename?: "OnboardingSchema";
    readonly steps?: Maybe<ReadonlyArray<OnboardingStep>>;
    readonly numStepsLeft: Scalars["Int"];
    readonly numStepsCompleted: Scalars["Int"];
    readonly numSteps: Scalars["Int"];
    readonly completed: Scalars["Boolean"];
};
export declare type OnboardingSchemaStepsArgs = {
    completed?: Maybe<Scalars["Boolean"]>;
    requiredForSubmission?: Maybe<Scalars["Boolean"]>;
};
export declare type OnboardingSchemaNumStepsLeftArgs = {
    requiredForSubmission?: Maybe<Scalars["Boolean"]>;
};
export declare type OnboardingSchemaNumStepsCompletedArgs = {
    requiredForSubmission?: Maybe<Scalars["Boolean"]>;
};
export declare type OnboardingSchemaNumStepsArgs = {
    requiredForSubmission?: Maybe<Scalars["Boolean"]>;
};
export declare type OnboardingStep = {
    readonly __typename?: "OnboardingStep";
    readonly name: MerchantOnboardingStep;
    readonly title: Scalars["String"];
    readonly description: Scalars["String"];
    readonly ctaText: Scalars["String"];
    readonly ctaLink?: Maybe<Scalars["String"]>;
    readonly illustration?: Maybe<Scalars["String"]>;
    readonly completed: Scalars["Boolean"];
};
export declare type OneoffPaymentStatus = "CANCELLED" | "UNPAID" | "PAID";
export declare type OneoffPaymentType = "WISHPOST_ADJUSTMENT_PAYMENT" | "WITHHOLD_RELEASE" | "MERCHANT_INCENTIVE" | "EARLY_PAYMENT_REIMBURSEMENT_FEE" | "CONSOLIDATE_MP_PAYMENT" | "PRODUCT_REBATE" | "FINE_REVERSED" | "ONEOFF_ADMIN_TOOL" | "DISPUTE_APPROVED" | "FBW_PAYMENT" | "PRODUCT_BOOST_BALANCE_REFUND" | "REV_SHARE_ADJUSTMENT" | "REGISTRATION_REFUND" | "ONEOFF" | "EARLY_PAYMENT" | "SE_CASH_BACK" | "STORE_PAYMENT" | "PRODUCT_UNTAGGED_MISLEADING" | "WISH_PARCEL_SERVICE_ADJUSTMENT";
export declare type OrderAdvancedLogisticsInfoSchema = {
    readonly __typename?: "OrderAdvancedLogisticsInfoSchema";
    readonly canUncombine: Scalars["Boolean"];
};
export declare type OrderBadge = "WPS_ELIGIBLE" | "PREMIUM_SHIPPING_CARRIER_UPGRADE" | "LESS_THAN_TRUCK_LOAD" | "COUNTRY_BADGE_KR" | "NON_COMPLIANT_WISH_EXPRESS" | "TRACKING_CANCELLED" | "UNIFICATION_INITIATIVE" | "PAY_CUSTOMER_VAT_REQUIRED_LEGACY_DE" | "OPTIONAL_ADVANCED_LOGISTICS" | "EPC_FAST_PAYMENT" | "CONFIRMED_DELIVERY_REQUIRED" | "COUNTRY_BADGE_BR" | "COMBINED" | "APLUS_FAST_PAYMENT" | "STRATEGIC_COUNTRY_REBATE" | "CHINA_POST_SUBSIDY" | "PAY_CUSTOMER_VAT_REQUIRED_UK" | "SE_CASHBACK" | "COUNTRY_BADGE_NO" | "ADVANCED_LOGISTICS" | "MERCHANT_STANDING_BENEFIT" | "EU_VAT" | "STRATEGIC_ORDER_REBATE" | "FBW" | "COUNTRY_BADGE_GB" | "WISH_EXPRESS" | "PAY_CUSTOMER_VAT_REQUIRED_EU" | "TRACKING_CANCELLED_A_PLUS";
export declare type OrderCarrierTier = "Tier1" | "Tier3" | "Tier2" | "Tier4";
export declare type OrderConstants = {
    readonly __typename?: "OrderConstants";
    readonly dadaPolicyDaysToConfirmedDelivered?: Maybe<Scalars["Int"]>;
};
export declare type OrderCsvColumnSchema = {
    readonly __typename?: "OrderCSVColumnSchema";
    readonly name: Scalars["String"];
    readonly description: Scalars["String"];
};
export declare type OrderEpcInfoSchema = {
    readonly __typename?: "OrderEPCInfoSchema";
    readonly canUncombine: Scalars["Boolean"];
};
export declare type OrderEstimatedShippingTimelineSchema = {
    readonly __typename?: "OrderEstimatedShippingTimelineSchema";
    readonly maxShipTime: Datetime;
    readonly maxDeliveryTime?: Maybe<Datetime>;
};
export declare type OrderFbwDetailsSchema = {
    readonly __typename?: "OrderFBWDetailsSchema";
    readonly isFbw: Scalars["Boolean"];
    readonly warehouseName: Scalars["String"];
    readonly warehouseId: Scalars["String"];
};
export declare type OrderHistorySearchType = "ORDER_ID" | "PRODUCT_ID" | "TRACKING_NUMBER" | "USER_NAME" | "DISPUTE_ID";
export declare type OrderHistorySort = {
    readonly field: OrderHistorySortFieldType;
    readonly order: SortOrderType;
};
export declare type OrderHistorySortFieldType = "ORDER_TIME";
export declare type OrderLimboState = "LIMBO_AND_ROUTED" | "NOT_LIMBO" | "LIMBO_AND_CUSTOMER_REFUNDED" | "LIMBO_AND_NOT_ROUTED";
export declare type OrderLogicalPaymentState = "TO_BE_PAID" | "PENDING_WFP_WITHHOLD" | "PENDING_WISHPOST_SHIPPING" | "WILL_NOT_BE_PAID" | "HAS_BEEN_PAID" | "FBW_PAID" | "PENDING_CONFIRMED_SHIP" | "UNDER_REVIEW" | "WITHHELD";
export declare type OrderNoFulfillSchema = {
    readonly __typename?: "OrderNOFulfillSchema";
    readonly isBoundOrder: Scalars["Boolean"];
};
export declare type OrderOnTimeDeliveryCriteria = "WISH_EXPRESS" | "DADA";
export declare type OrderPolicyType = "WISH_EXPRESS" | "WAREHOUSE_FULFILLMENT_POLICY";
export declare type OrderRebateCancelType = "CANCEL_BEFORE_PAYMENT" | "CANCEL_AFTER_PAYMENT" | "NO_CANCEL";
export declare type OrderRebateSchema = {
    readonly __typename?: "OrderRebateSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly type: OrderRebateType;
    readonly paymentId?: Maybe<Scalars["ObjectIdType"]>;
    readonly refundPaymentId?: Maybe<Scalars["ObjectIdType"]>;
    readonly amount: CurrencyValue;
    readonly cancelState?: Maybe<OrderRebateCancelType>;
};
export declare type OrderRebateSchemaAmountArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderRebateType = "STRATEGIC_ORDER_REBATE" | "CHINA_POST_SUBSITY" | "COVID19_SUBSIDY" | "MARKETING_REBATE" | "WISH_EXPRESS_REBATE";
export declare type OrderRefundBuyerFraudSubreasonSchema = {
    readonly __typename?: "OrderRefundBuyerFraudSubreasonSchema";
    readonly reason: BuyerFraudReasonCategory;
    readonly text: Scalars["String"];
};
export declare type OrderRefundDeductedStatus = "DEDUCTED_AFTER_PAYMENT" | "DEDUCTED_BEFORE_PAYMENT" | "UNDEDUCTED";
export declare type OrderRefundItemDisputeSchema = {
    readonly __typename?: "OrderRefundItemDisputeSchema";
    readonly supportingPolicy: Scalars["String"];
    readonly paymentId?: Maybe<Scalars["ObjectIdType"]>;
    readonly isApproved: Scalars["Boolean"];
};
export declare type OrderRefundItemSchema = {
    readonly __typename?: "OrderRefundItemSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly refundTime: Datetime;
    readonly quantity: Scalars["Int"];
    readonly merchantResponsibleAmount?: Maybe<CurrencyValue>;
    readonly merchantResponsibilityRatio: Scalars["Float"];
    readonly reasonInfo: OrderRefundReasonSchema;
    readonly eatCostWarning?: Maybe<MerchantWarningSchema>;
    readonly dispute?: Maybe<OrderRefundItemDisputeSchema>;
    readonly isDisputable: Scalars["Boolean"];
    readonly refundTax?: Maybe<CurrencyValue>;
    readonly payment: OrderRefundPaymentSchema;
    readonly note?: Maybe<Scalars["String"]>;
    readonly source: RefundSource;
};
export declare type OrderRefundItemSchemaMerchantResponsibleAmountArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
    includeWishpostFee?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderRefundItemSchemaRefundTaxArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderRefundItemsSummarySchema = {
    readonly __typename?: "OrderRefundItemsSummarySchema";
    readonly isPartialAmountRefunded: Scalars["Boolean"];
    readonly refundedQuantity: Scalars["Int"];
    readonly refundedPercentage?: Maybe<Scalars["Float"]>;
};
export declare type OrderRefundPaymentSchema = {
    readonly __typename?: "OrderRefundPaymentSchema";
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly time?: Maybe<Datetime>;
    readonly status: OrderRefundDeductedStatus;
    readonly merchantAmount?: Maybe<CurrencyValue>;
};
export declare type OrderRefundPaymentSchemaMerchantAmountArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
    includeWishpostFee?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderRefundReasonSchema = {
    readonly __typename?: "OrderRefundReasonSchema";
    readonly reason: RefundReasonCategory;
    readonly text?: Maybe<Scalars["String"]>;
};
export declare type OrderReturnLabelFeeSchema = {
    readonly __typename?: "OrderReturnLabelFeeSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly amount: CurrencyValue;
};
export declare type OrderReturnLabelFeeSchemaAmountArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderReturnsSchema = {
    readonly __typename?: "OrderReturnsSchema";
    readonly canOpenReturnDispute: Scalars["Boolean"];
};
export declare type OrderRevShareProductCategory = "HOUSEHOLD" | "OTHER" | "SEX_TOY";
export declare type OrderSalesTaxDetailsSchema = {
    readonly __typename?: "OrderSalesTaxDetailsSchema";
    readonly netTax: CurrencyValue;
    readonly salesTax: CurrencyValue;
    readonly refundedTax: CurrencyValue;
    readonly items: ReadonlyArray<OrderTaxItemSchema>;
    readonly remitTypes: ReadonlyArray<CommerceTransactionTaxRemitType>;
    readonly itemCount: Scalars["Int"];
    readonly authorityCountry?: Maybe<Country>;
};
export declare type OrderSalesTaxDetailsSchemaNetTaxArgs = {
    remitType?: Maybe<CommerceTransactionTaxRemitType>;
    inMerchantCurrency?: Maybe<Scalars["Boolean"]>;
    targetCurrency?: Maybe<TaxTargetCurrency>;
};
export declare type OrderSalesTaxDetailsSchemaSalesTaxArgs = {
    remitType?: Maybe<CommerceTransactionTaxRemitType>;
    inMerchantCurrency?: Maybe<Scalars["Boolean"]>;
    eventTypes?: Maybe<ReadonlyArray<CommerceTransactionTaxEventType>>;
    targetCurrency?: Maybe<TaxTargetCurrency>;
};
export declare type OrderSalesTaxDetailsSchemaRefundedTaxArgs = {
    remitType?: Maybe<CommerceTransactionTaxRemitType>;
    inMerchantCurrency?: Maybe<Scalars["Boolean"]>;
    targetCurrency?: Maybe<TaxTargetCurrency>;
};
export declare type OrderSalesTaxDetailsSchemaItemsArgs = {
    remitType?: Maybe<CommerceTransactionTaxRemitType>;
};
export declare type OrderSchema = {
    readonly __typename?: "OrderSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly transactionId?: Maybe<Scalars["ObjectIdType"]>;
    readonly merchantId: Scalars["ObjectIdType"];
    readonly orderTime?: Maybe<Datetime>;
    readonly releasedTime?: Maybe<Datetime>;
    readonly state: CommerceTransactionState;
    readonly merchantTotal: CurrencyValue;
    readonly totalCost: CurrencyValue;
    readonly priceCost: CurrencyValue;
    readonly hoursLeftToFulfill?: Maybe<Scalars["Int"]>;
    readonly paymentStatus: OrderLogicalPaymentState;
    readonly shippingDetails?: Maybe<ShippingDetailsSchema>;
    readonly variation?: Maybe<VariationSchema>;
    readonly product?: Maybe<ProductSchema>;
    readonly productName: Scalars["String"];
    readonly warehouse?: Maybe<MerchantWarehouseSchema>;
    readonly quantity: Scalars["Int"];
    readonly requiresConfirmedDelivery: Scalars["Boolean"];
    readonly availableShippingProviders: ReadonlyArray<ShippingProviderSchema>;
    readonly shippingProviderId?: Maybe<Scalars["Int"]>;
    readonly acceptableShippingOrigins: ReadonlyArray<Country>;
    readonly shippingOrigin?: Maybe<Country>;
    readonly shippingOriginAddress?: Maybe<AddressSchema>;
    readonly tax?: Maybe<OrderTaxSchema>;
    readonly productId: Scalars["ObjectIdType"];
    readonly skuAtPurchaseTime: Scalars["String"];
    readonly sizeAtPurchaseTime?: Maybe<Scalars["String"]>;
    readonly colorAtPurchaseTime?: Maybe<Scalars["String"]>;
    readonly canRefund: Scalars["Boolean"];
    readonly canEditShippingAddress: Scalars["Boolean"];
    readonly isProcessing: Scalars["Boolean"];
    readonly isWishExpress: Scalars["Boolean"];
    readonly shouldDisplayDeliveryStatus: Scalars["Boolean"];
    readonly isStreamline: Scalars["Boolean"];
    readonly warehouseFulfillmentPolicyInfo?: Maybe<OrderWfpInfoSchema>;
    readonly specialPrograms: ReadonlyArray<SpecialOrderProgramSchema>;
    readonly shopifyDetails?: Maybe<OrderShopifyDetailsSchema>;
    readonly deliveryDeadline?: Maybe<Datetime>;
    readonly reReleasedTime?: Maybe<Datetime>;
    readonly trackingCancelledDate?: Maybe<Datetime>;
    readonly validRefundReasons: ReadonlyArray<OrderRefundReasonSchema>;
    readonly isAdvancedLogistics: Scalars["Boolean"];
    readonly isCombinedOrder: Scalars["Boolean"];
    readonly isRemovedFromAdvancedLogistics: Scalars["Boolean"];
    readonly isUnityOrder: Scalars["Boolean"];
    readonly initialWishpostShipping?: Maybe<CurrencyValue>;
    readonly estimatedWishpostShipping?: Maybe<CurrencyValue>;
    readonly unityWishpostShipping?: Maybe<CurrencyValue>;
    readonly wishpostShippingUpdates: ReadonlyArray<WishPostShippingUpdatesSchema>;
    readonly shippedDate?: Maybe<Datetime>;
    readonly hasShipped: Scalars["Boolean"];
    readonly refundedTime?: Maybe<Datetime>;
    readonly legacyRefundSource?: Maybe<LegacyRefundSource>;
    readonly isBlueFusion: Scalars["Boolean"];
    readonly isStoreUploaded: Scalars["Boolean"];
    readonly isPickupNow: Scalars["Boolean"];
    readonly merchantPrice: CurrencyValue;
    readonly merchantShipping: CurrencyValue;
    readonly shippingCost: CurrencyValue;
    readonly warehouseId?: Maybe<Scalars["String"]>;
    readonly limboState: OrderLimboState;
    readonly merchantCurrencyAtPurchaseTime: PaymentCurrencyCode;
    readonly customerPaidCurrency: Scalars["String"];
    readonly combinedOrderId?: Maybe<Scalars["ObjectIdType"]>;
    readonly chargeback: Scalars["Boolean"];
    readonly rebates?: Maybe<ReadonlyArray<OrderRebateSchema>>;
    readonly fbwDetails?: Maybe<OrderFbwDetailsSchema>;
    readonly returnLabelFee?: Maybe<OrderReturnLabelFeeSchema>;
    readonly returnDetailsId?: Maybe<Scalars["ObjectIdType"]>;
    readonly trackingDispute?: Maybe<TrackingDisputeSchema>;
    readonly cartPrice?: Maybe<CartPriceDetailSchema>;
    readonly requiresDeliveredDutyPaid: Scalars["Boolean"];
    readonly inRefundLimbo: Scalars["Boolean"];
    readonly wishExpressExtensionDays: Scalars["Int"];
    readonly isRouted: Scalars["Boolean"];
    readonly isFreeShippingEligible: Scalars["Boolean"];
    readonly routedTo?: Maybe<OrderSchema>;
    readonly confirmedDelivered: Scalars["Boolean"];
    readonly canModifyTrackingInfo: Scalars["Boolean"];
    readonly wasDeliveredOnTime?: Maybe<Scalars["Boolean"]>;
    readonly ttd?: Maybe<Scalars["Int"]>;
    readonly ttdBusinessDays?: Maybe<Scalars["Int"]>;
    readonly expectedTtdBusinessDays?: Maybe<Scalars["Int"]>;
    readonly isInIncentiveProgram: Scalars["Boolean"];
    readonly isShippedWithQualifiedDadaCarrier: Scalars["Boolean"];
    readonly isSwapFromAnotherOrder: Scalars["Boolean"];
    readonly isEligibleToShipWithWps: Scalars["Boolean"];
    readonly wpsFulfillment?: Maybe<WpsFulfillmentInfoSchema>;
    readonly epc?: Maybe<OrderEpcInfoSchema>;
    readonly advancedLogistics?: Maybe<OrderAdvancedLogisticsInfoSchema>;
    readonly returns?: Maybe<OrderReturnsSchema>;
    readonly supportTicket?: Maybe<CustomerSupportTicket>;
    readonly ukDetails?: Maybe<OrderUkFulfillSchema>;
    readonly norwayDetails?: Maybe<OrderNoFulfillSchema>;
    readonly packageOverviewDocumentUrl?: Maybe<Scalars["String"]>;
    readonly shippingEstimate?: Maybe<OrderShippingEstimate>;
    readonly canRequestAddressVerification: Scalars["Boolean"];
    readonly canUploadDeliveryConfirmation: Scalars["Boolean"];
    readonly routingOriginalOrderId?: Maybe<Scalars["ObjectIdType"]>;
    readonly canShowCarrierTier: Scalars["Boolean"];
    readonly customerIdentifyInfo?: Maybe<CustomerIdentityInfo>;
    readonly tracking?: Maybe<OrderTrackingInfoSchema>;
    readonly penalties: ReadonlyArray<PenaltySchema>;
    readonly infractions: ReadonlyArray<MerchantWarningSchema>;
    readonly badges: ReadonlyArray<OrderBadge>;
    readonly isNewRefund: Scalars["Boolean"];
    readonly refundItems?: Maybe<ReadonlyArray<OrderRefundItemSchema>>;
    readonly refundItemsSummary?: Maybe<OrderRefundItemsSummarySchema>;
    readonly client?: Maybe<CommerceTransactionClient>;
    readonly estimatedShippingTimeline?: Maybe<OrderEstimatedShippingTimelineSchema>;
    readonly updatedRevShare?: Maybe<Scalars["Float"]>;
    readonly originalRevShare?: Maybe<Scalars["Float"]>;
    readonly oneoffPayment?: Maybe<MerchantOneoffPaymentSchema>;
    readonly productCategoryDispute?: Maybe<ProductCategoryDisputeSchema>;
    readonly revShare: RevShareInfoSchema;
    readonly counterfeitRefundWarningId?: Maybe<Scalars["ObjectIdType"]>;
    readonly withholdWarningId?: Maybe<Scalars["ObjectIdType"]>;
    readonly withholdReasonText?: Maybe<Scalars["String"]>;
    readonly warehouseShippingType?: Maybe<OrderWarehouseShippingType>;
    readonly customer: CustomerSchema;
    readonly showAplusShippingAddressTooltip: Scalars["Boolean"];
};
export declare type OrderSchemaAvailableShippingProvidersArgs = {
    originCountryCode: CountryCode;
};
export declare type OrderSchemaMerchantPriceArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderSchemaMerchantShippingArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderSchemaShippingCostArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderSchemaWasDeliveredOnTimeArgs = {
    criteria?: Maybe<OrderOnTimeDeliveryCriteria>;
};
export declare type OrdersCsvDownload = {
    readonly __typename?: "OrdersCsvDownload";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type OrdersCsvDownloadInput = {
    readonly query?: Maybe<Scalars["String"]>;
    readonly searchType?: Maybe<OrderHistorySearchType>;
    readonly offset?: Maybe<Scalars["Int"]>;
    readonly sort?: Maybe<OrderHistorySort>;
    readonly filter?: Maybe<CsvExportFilterType>;
    readonly startDate: DatetimeInput;
    readonly endDate: DatetimeInput;
    readonly wishExpressOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type OrderShippingEstimate = {
    readonly __typename?: "OrderShippingEstimate";
    readonly minTime?: Maybe<Timedelta>;
    readonly maxTime?: Maybe<Timedelta>;
};
export declare type OrderShopifyDetailsSchema = {
    readonly __typename?: "OrderShopifyDetailsSchema";
    readonly shopifyOrderId: Scalars["String"];
};
export declare type OrderTaxItemSchema = {
    readonly __typename?: "OrderTaxItemSchema";
    readonly id: Scalars["String"];
    readonly createdTime: Datetime;
    readonly transactionId: Scalars["ObjectIdType"];
    readonly variationId: Scalars["ObjectIdType"];
    readonly orderId: Scalars["ObjectIdType"];
    readonly refundItemId?: Maybe<Scalars["ObjectIdType"]>;
    readonly taxType: TaxType;
    readonly eventType: CommerceTransactionTaxEventType;
    readonly remitType: CommerceTransactionTaxRemitType;
    readonly isRefund: Scalars["Boolean"];
    readonly isSale: Scalars["Boolean"];
    readonly quantity: Scalars["Int"];
    readonly grossAmount: CurrencyValue;
    readonly taxableAmount: CurrencyValue;
    readonly taxRate: Scalars["Float"];
    readonly taxAmount: CurrencyValue;
    readonly exemptAmount?: Maybe<CurrencyValue>;
    readonly authority: TaxAuthoritySchema;
    readonly taxableAddress: AddressSchema;
};
export declare type OrderTaxSchema = {
    readonly __typename?: "OrderTaxSchema";
    readonly norwayVatNumber?: Maybe<Scalars["String"]>;
    readonly salesTax: OrderSalesTaxDetailsSchema;
    readonly isVatOrder?: Maybe<Scalars["Boolean"]>;
    readonly euVat?: Maybe<EuvatSchema>;
    readonly isWishReseller: Scalars["Boolean"];
};
export declare type OrderTrackingInfoSchema = {
    readonly __typename?: "OrderTrackingInfoSchema";
    readonly confirmedFulfillmentDate?: Maybe<Datetime>;
    readonly deliveredDate?: Maybe<Datetime>;
    readonly isTrackingConfirmed: Scalars["Boolean"];
    readonly checkpoints?: Maybe<ReadonlyArray<TrackingCheckpointSchema>>;
    readonly carrierTier?: Maybe<OrderCarrierTier>;
};
export declare type OrderUkFulfillSchema = {
    readonly __typename?: "OrderUKFulfillSchema";
    readonly isBoundOrder: Scalars["Boolean"];
};
export declare type OrderWarehouseShippingType = "MERCHANT_TTD_13_DAY" | "REGULAR" | "MERCHANT_TTD_40_DAY" | "MERCHANT_TTD_38_DAY" | "MERCHANT_TTD_3_DAY" | "MERCHANT_TTD_17_DAY" | "MERCHANT_TTD_20_DAY" | "MERCHANT_TTD_7_DAY" | "MERCHANT_TTD_35_DAY" | "MERCHANT_TTD_44_DAY" | "MERCHANT_TTD_23_DAY" | "WISH_EXPRESS_2_DAY" | "MERCHANT_TTD_27_DAY" | "FBW_V1_WLC" | "WISH_EXPRESS" | "MERCHANT_TTD_19_DAY" | "MERCHANT_TTD_9_DAY" | "WISH_BLUE" | "MERCHANT_TTD_15_DAY" | "MERCHANT_TTD_25_DAY" | "MERCHANT_TTD_31_DAY" | "FBW_V2_REGULAR" | "MERCHANT_TTD_11_DAY" | "MERCHANT_TTD_16_DAY" | "MERCHANT_TTD_33_DAY" | "MERCHANT_TTD_21_DAY" | "MERCHANT_TTD_12_DAY" | "MERCHANT_TTD_42_DAY" | "MERCHANT_TTD_4_DAY" | "MERCHANT_TTD_41_DAY" | "FBW_V2" | "MERCHANT_TTD_45_DAY" | "MERCHANT_TTD_37_DAY" | "FBW_V1" | "MERCHANT_TTD_39_DAY" | "MERCHANT_TTD_2_DAY" | "MERCHANT_TTD_22_DAY" | "MERCHANT_TTD_18_DAY" | "MERCHANT_TTD_34_DAY" | "WISH_EXPRESS_7_DAY" | "FBW_V2_CALCULATED" | "MERCHANT_TTD_30_DAY" | "MERCHANT_TTD_10_DAY" | "FBW_V2_EXPRESS" | "MERCHANT_TTD_43_DAY" | "MERCHANT_TTD_32_DAY" | "MERCHANT_TTD_26_DAY" | "MERCHANT_TTD_14_DAY" | "WAIT_AND_SAVE" | "MERCHANT_TTD_6_DAY" | "MERCHANT_TTD_8_DAY" | "MERCHANT_TTD_24_DAY" | "MERCHANT_TTD_36_DAY" | "MERCHANT_TTD_28_DAY" | "MERCHANT_TTD_5_DAY" | "MERCHANT_TTD_29_DAY" | "MERCHANT_TTD_1_DAY";
export declare type OrderWfpInfoSchema = {
    readonly __typename?: "OrderWFPInfoSchema";
    readonly deliveryState: WfpOrderDeliveryState;
    readonly wishExpress?: Maybe<WishExpressInfoSchema>;
    readonly wfpWithholdReason?: Maybe<WfpWithholdReasonSchema>;
};
export declare type OtherCountriesShippingSetting = {
    readonly enabled: Scalars["Boolean"];
    readonly price: CurrencyInput;
};
export declare type PackageDimensionsInput = {
    readonly weight: WeightInput;
    readonly height?: Maybe<LengthInput>;
    readonly length?: Maybe<LengthInput>;
    readonly width?: Maybe<LengthInput>;
};
export declare type PasswordEvaluation = {
    readonly __typename?: "PasswordEvaluation";
    readonly valid: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type PasswordMutations = {
    readonly __typename?: "PasswordMutations";
    readonly change?: Maybe<ChangePasswordMutation>;
};
export declare type PasswordMutationsChangeArgs = {
    input: ChangePasswordInput;
};
export declare type PaymentBusinessInfo = {
    readonly __typename?: "PaymentBusinessInfo";
    readonly name: Scalars["String"];
    readonly businessId: Scalars["String"];
};
export declare type PaymentCurrencyCode = "JPY" | "USD" | "AUD" | "CHF" | "UAH" | "TRY" | "CNY" | "MXN" | "CZK" | "BRL" | "GBP" | "CAD" | "SEK" | "DKK" | "EUR";
export declare type PaymentPersonalInfo = {
    readonly __typename?: "PaymentPersonalInfo";
    readonly name: Scalars["String"];
    readonly id?: Maybe<Scalars["String"]>;
    readonly phoneNumber: Scalars["String"];
};
export declare type PaymentProvider = {
    readonly __typename?: "PaymentProvider";
    readonly logo: Scalars["String"];
    readonly name: Scalars["String"];
    readonly type: PayoutPaymentProviderType;
    readonly contactInfo?: Maybe<PaymentProviderContactInfo>;
};
export declare type PaymentProviderContactInfo = {
    readonly __typename?: "PaymentProviderContactInfo";
    readonly email: Scalars["String"];
    readonly phone?: Maybe<Scalars["String"]>;
    readonly website?: Maybe<Scalars["String"]>;
    readonly wechatUsername?: Maybe<Scalars["String"]>;
    readonly qqUserId?: Maybe<Scalars["String"]>;
};
export declare type PayoneerSignupMutation = {
    readonly __typename?: "PayoneerSignupMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly redirectUrl?: Maybe<Scalars["String"]>;
    readonly alreadyRegistered?: Maybe<Scalars["Boolean"]>;
};
export declare type PayoutPaymentProviderType = "LIANLIAN" | "PAYONEER" | "UMPAY_ENTERPRISE" | "UMPAY" | "BILL" | "PAYPAL" | "PAYPAL_EEA" | "PINGPONG" | "PAYPAL_MERCH" | "WISHPAY" | "UMPAY2" | "CARDINFOLINK" | "ALLPAY" | "PAYECO2";
export declare type PenaltySchema = {
    readonly __typename?: "PenaltySchema";
    readonly reason: FineReason;
};
export declare type PermissionSchema = {
    readonly __typename?: "PermissionSchema";
    readonly id: PermissionType;
    readonly name: Scalars["String"];
    readonly description?: Maybe<Scalars["String"]>;
};
export declare type PermissionStatusType = "ASSIGNED" | "ASSIGNABLE" | "DEFAULT";
export declare type PermissionType = "ADD_PRODUCTS" | "COUNTERFEIT_TAG" | "CAN_ACCESS_ONEOFF_API_GET_APPROVERS" | "CAN_CHECK_EXTERNAL_TRACKING" | "SHOW_SHIPPING_PROVIDERS" | "CAN_VIEW_ALL_INTERNAL_USERS" | "VIEW_TERM_OF_SERVICE_EPC_BILL_HOLD" | "REVIEW_ONEOFF_REQ_DISABLE_DYNAMIC_PRICING" | "EDIT_TAGGING_PERMISSIONS" | "CAN_BE_ASSIGNED_MERCHANT_COUNTRY" | "CREATE_ADMIN_ACCOUNT" | "REVIEW_ONEOFF_REQ_SET_REV_SHARE" | "EDIT_QA_PERMISSIONS" | "VIEW_PRODUCTS" | "IMAGE_CHANGE_AUDIT_TAG" | "CAN_MANAGE_US_BDS" | "VIEW_GS_MERCHANTS" | "BOOST" | "MANAGE_BRAND_PARTNERS" | "CREATE_B2B_SALE_FEE" | "CAN_REVIEW_CN_PAYMENT_REQUEST" | "CAN_ACCESS_ONEOFF_VIEW_ALL_REQUESTS" | "UPDATE_LOCAL_TO_LOCAL" | "CAN_ACCESS_ONEOFF_API_SAVE" | "CREATE_LEGAL_SETTLEMENT_FINE" | "CAN_PERFORM_CHARGEBACK_REVIEW" | "SEND_SYSTEM_UPDATE_TO_BD" | "COUNTERFEIT_TAG_AUDIT_IN_HOUSE" | "CREATE_ATO_HOLD" | "SHOW_DETAIL_TAGGER_TEST_SPEC" | "SHOW_ORDER_PENALTIES" | "VIEW_LEGAL_INJUNCTION" | "VIEW_HIGH_IP_INFRINGEMENT_HOLD" | "VIEW_PAYMENT_HISTORY" | "SUPPLY_CHAIN_FINANCE" | "CAN_GROUP_MERCHANTS" | "PROMO_TAG" | "MANAGE_LEGAL_INJUNCTION" | "REVIEW_ONEOFF_REQ_ISSUE_PB_CREDITS_TO_SELF_INVENTORY_MERCHANTS" | "EDIT_MERCHANT_PERMISSIONS" | "CAN_SEND_SMS" | "IP_VIOLATION_TAG_RESOLUTION" | "MANAGE_TAX_ENROLLMENT" | "CREATE_DECEPTIVE_FULFILLMENT_FINE" | "CAN_CREATE_WECHAT_OFFICIAL_ACCOUNT_MENU" | "CREATE_ADMIN" | "CAN_ACT_ON_US_MERCHANT" | "EDIT_ORDERS" | "LISTING_REVIEW_TAG" | "LOGIN_TO_WISH_LOCAL" | "PRODUCT_RATING_IMAGE_MANUAL_TAG" | "CREATE_PUBLIC_MERCHANT_APP" | "MANAGE_ERP_PARTNERS" | "TAG_AUTHORIZATION" | "REVIEW_ONEOFF_REQ_WHITELIST_MERCHANTS" | "CAN_HANDLE_FRAUD_INFRACTION" | "FAST_QUEUE_TAGGING_JOBS" | "SUPPLY_CHAIN_MERCHANDISE" | "CAN_ACCESS_ONEOFF_PAGE_LIST" | "USER_GENERATED_PRODUCT_IMAGE_TAG" | "COMPLETE_AUTHENTIC_BRAND_SELLER_BADGE_APPLICATIONS" | "CAN_VIEW_TRANSACTION_DETAIL" | "MGC_IP_MANUAL_TAG" | "EDIT_ADMIN_PERMISSIONS" | "CAN_VIEW_BRAND_LIST" | "SHOW_PRODUCT_BOOST" | "SHOW_ALL_MERCHANT_PROFILES" | "REVIEW_COUNTERFEIT_INFRACTION" | "VIEW_OTHER_HOLD" | "SHOW_DETAIL_TAGGER_TEST_RESULT" | "EXPORT_PRODUCT_STAT" | "VIEW_FRAUDULENT_ACTIVITES_HOLD" | "GET_PAYMENTS" | "CREATE_VARIATION" | "CAN_REVIEW_DISPUTES" | "CREATE_TAKEDOWN_REQUESTS" | "CREATE_TRO_HOLD" | "CAN_ACT_ON_EU_MERCHANT" | "SHOW_COUNTERFEIT_TAGGER_TEST_RESULT" | "TAG_STATUS_CHECK" | "VIEW_HOLDS_FOR_LOCAL_MERCHANTS" | "CREATE_LISTING_REVIEW_JOB" | "MANAGE_SHIPPING_SETTINGS" | "CAN_CREATE_USERS" | "DETAIL_TAG_MANUAL" | "ADD_SIZE_COLOR" | "UNDO_INFRACTION_ACTION" | "AUDIT_TAGGING_BY_TAGGERS" | "REMOVE_WISH_EXPRESS_PRODUCTS" | "INVALIDATE_IDENTICAL_REVIEWS" | "VIEW_LOGICAL_TICKET_QUEUES" | "LISTING_REVIEW_TAG_RESOLUTION" | "YANWEN_LOGISTIC" | "SHIP_ORDERS" | "REVIEW_ONEOFF_REQ_TEMP_EXEMPT_PROMOTE_PRODUCT_POLICY" | "REVIEW_ONEOFF_REQ_MIGRATE_MERCHANT_CURRENCY" | "VIEW_SHIP_FRAUD_HOLD" | "CAN_VIEW_MERCHANT_IDS" | "EDIT_LOGICAL_TICKET_QUEUE_ASSIGNMENT" | "CAN_MANAGE_MY_MERCHANT" | "SEND_SYSTEM_UPDATE_TO_MERCHANTS" | "VIEW_TRUE_BRAND_DIRECTORY" | "EDIT_BD_PERMISSIONS" | "AUTHORIZED_MERCHANT" | "CS_REP_LEAD_STATS" | "EDIT_PRODUCTS" | "PROMO_MANUAL_TAG" | "VIEW_GLOBAL_LEADERBOARD" | "COUNTERFEIT_TAG_RESOLUTION" | "MANAGE_WHITE_GLOVE" | "CAN_VIEW_ORDERS" | "CAN_VIEW_CN_INFRACTIONS" | "CAN_GET_COLLECTIONBOOST" | "SYNC_SHOPIFY_PRODUCTS" | "SHOW_REFUND_PERFORMANCE" | "CAN_REVIEW_US_PAYMENT_REQUEST" | "SHOW_ORDERS" | "CAN_USE_TFA_ADMIN_TOOL" | "CAN_DOWNLOAD_ENTIRE_ORDER_HISTORY" | "CAN_BE_VIEWED_BY_OUTSOURCE_MERCHANT" | "REQUEST_EARLY_PAYMENT" | "VIEW_BD_ANNOUNCEMENTS" | "SAFELIST_PRODUCTS" | "BOXC_LOGISTIC" | "REVIEW_ALL_INFRACTION" | "CAN_SEND_EMAIL" | "ESCALATE_TO_MERCHANT" | "ACCEPT_MERCHANT_TERMS" | "CREATE_INTERNAL_HOLD" | "SUPPLY_CHAIN_ADMIN" | "REVIEW_ONEOFF_REQ_ENABLE_DYNAMIC_PRICING" | "CAN_REVIEW_TRUE_BRAND_REQUEST" | "UPDATE_BLUE_STORE_ADVANCE" | "EDIT_MERCHANTS" | "CAN_ACT_ON_BR_MERCHANT" | "CAN_ACT_ON_ASIAN_MERCHANT" | "CAN_REVIEW_MERCHANT_INFO_ONLY" | "SHOW_STORE_ASSETS" | "CAN_HANDLE_ORDER_CHANGE_REQUEST" | "CAN_ACCESS_ONEOFF_REQ_TOOL" | "ACCESS_EXTERNAL_APIS" | "VIEW_TERM_OF_SERVICE_HOLD" | "CAN_REVIEW_UNSAFE" | "CAN_VIEW_TRACKING_DISPUTES" | "CAN_REVIEW_MERCHANTS" | "COUNTERFEIT_TAG_AUDIT" | "VIEW_FAKE_TRACKING_FINE" | "CAN_SEND_ANNOUNCEMENTS_AS_EDUCATION_TEAM" | "SHOW_PRODUCT_BRAND_DETECTION" | "MANAGE_PRODUCT_GEOBLOCK" | "SHOW_MERCHANT_PROFILE" | "VIEW_DISBURSEMENT_INFO" | "CAN_VIEW_GS_MERCHANT_INFO" | "PRODUCT_CATEGORY_DISPUTE_EDIT" | "VIEW_JP_MERCHANTS" | "CAN_USE_TFA_BD_TOOL" | "SUPPLY_CHAIN_AP" | "CAN_MANAGE_SG_MERCHANT" | "LOGIN_AS_CS" | "VIEW_WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION" | "VIEW_MERCHANTS" | "CAN_BE_ASSIGNED_MANAGER" | "VALIDATE_PROVIDER_DISBURSEMENT" | "COUNTERFEIT_TAG_MANUAL" | "REVIEW_BRAND_AUTH" | "VIEW_INTERNAL_HOLD" | "CAN_MANAGE_JP_MERCHANT" | "RETURN_CENTER" | "VERIFY_WAREHOUSE_ONEOFF_REQ_APPROVER" | "CAN_REVIEW_EPC_APPLICATION" | "VIEW_MERCHANT_GAMING_REVIEW_TICKETS" | "CUSTOM_CHARTS" | "VIEW_KR_MERCHANTS" | "CAN_MANAGE_ROLES_FOR_ALL_USERS" | "AUDIT_CS_TICKETS" | "MANAGE_BRAND_VIOLATION_REPORT" | "CAN_VIEW_ACCOUNT_BALANCE" | "SHOW_MERCHANT_TODO_ITEMS" | "MANAGE_STORE_FULFILLMENT" | "CAN_VIEW_DISABLED_INFO" | "EDIT_FRAUD_TEAM_PERMISSIONS" | "VIEW_CUSTOMER_PROFILE_PAGE" | "CREATE_TERM_OF_SERVICE_EPC_BILL_HOLD" | "VIEW_WARNING_MANUAL_HOLD" | "CAN_UNENROLL_WHITE_GLOVE" | "CAN_TOGGLE_ADMIN_EDIT_ON_ALL_USERS" | "CAN_EDIT_CANNED_RESPONSES" | "COUNTERFEIT_HELP_TAG" | "CAN_LOGIN_AS_FACTORY_MANAGERS" | "CREATE_TRUE_TAG_ASSOCIATION" | "CAN_VIEW_PRODUCT_STATUS" | "CAN_ACCESS_AUTH_BRAND_AUDIT" | "UPLOAD_PRODUCTS_CSV" | "CREATE_WISHPOST_ID_NOT_COMPLETE_FACE_RECOGNITION" | "EXPORT_PRODUCT_DATA" | "IDENTICAL_TOOL_TAG_AUDIT" | "CAN_REVIEW_TRACKING_DISPUTES" | "CREATE_TERM_OF_SERVICE_HOLD" | "RAMP_DOWN_MERCHANT_IMPRESSIONS" | "RECYCLE_TRACKING" | "CREATE_ONEOFF_FINE" | "VIEW_MISSING_CA_TAX_SETTING_HOLD" | "VIEW_EU_MERCHANTS" | "PRODUCT_RATING_VIDEO_AUDIT_TAG" | "CAN_MANAGE_PERMISSIONS_FOR_ALL_USERS" | "TRUE_BRAND_TAG" | "VIEW_WITHHOLD_FUND" | "EDIT_MERCHANT_WARNING_AUDIT_STATUS" | "CAN_APPROVE_ANY_MERCHANT" | "VIEW_LEGAL_SETTLEMENT_FINE" | "SUPPLY_CHAIN_SOURCING" | "CAN_LOGIN_AS_BD" | "EDIT_ACCOUNT_NAME" | "CAN_GET_EARLY_PAYMENT_AMOUNT_AVAILABLE" | "DOWNLOAD_EXPORT" | "SEND_SYSTEM_UPDATE_TO_TAGGERS" | "MGC_IP_TAG" | "CAN_TOGGLE_ADMIN_EDIT_ON_STORE_USERS" | "SUPPLY_CHAIN_READ_ONLY" | "EDIT_LOGICAL_TICKET_QUEUE" | "PRODUCT_RATING_IMAGE_TAG" | "MODIFY_MERCHANT_FINES" | "REVIEW_ONEOFF_REQ_ENROLL_MERCHANT_PLUS" | "CAN_VIEW_ORDER_SHIPPING_ESTIMATE" | "WISHPOST" | "VIEW_LCL_FBW_FEE" | "CAN_ADMIN_CANNED_RESPONSES" | "IDENTICAL_TOOL_TAG_RESOLUTION" | "CAN_EDIT_TAGGING_TESTS" | "MGC_CONTENT_TAG" | "CREATE_TEAM_MEMBER" | "CAN_VIEW_BRANDS" | "CAN_AUDIT_REVIEW_RESULT" | "VIEW_PAYMENT_SETTINGS" | "EXT_CS_CAN_REFUND_ESCALATION" | "REVIEW_ONEOFF_REQ_VERIFY_WAREHOUSE" | "PRODUCT_RATING_IMAGE_AUDIT_TAG" | "SUPPLY_CHAIN_PAYMENT_INITIATED" | "UPDATE_PAYMENT_PERSONAL_SETTINGS" | "CAN_MANAGE_BLUE_AMBASSADORS" | "ENABLE_DISABLE_ALL_PRODUCTS" | "SHOW_PRODUCTS" | "MGC_CONTENT_MANUAL_TAG" | "FBW_TICKETS" | "SHOW_MERCHANT_ASSETS" | "REVIEW_ONEOFF_REQ_REMOVE_MAX_TTD_ENTENSION" | "EXPORT_ORDERS" | "SHOW_MERCHANT_STATS" | "VIEW_WARNING_BAN_HOLD" | "SUPPLY_CHAIN_MAINTAINER" | "VIEW_ATO_HOLD" | "VIEW_B2B_SALE_FEE" | "CAN_CONVERT_ALL_USERS" | "FAST_QUEUE_TAGGING_JOBS_HIGHEST_PRIORITY" | "VIEW_CN_MERCHANTS" | "CREATE_ONEOFF_REQUEST_EMAIL_REPORT" | "BRAND_REVIEW_TAG" | "CREATE_SHIP_FRAUD_HOLD" | "EDIT_CS_REPS" | "AUDIT_ALL_CS_TEAMS" | "CAN_MANAGE_GS_MERCHANT" | "REVIEW_ONEOFF_REQ_OVERRIDE_MERCHANT_COUNTRY" | "CAN_MANAGE_BRAND_LIST" | "CAN_LOGIN_AS_OTHER_USER" | "GENDER_TAG" | "CAN_PERFORM_ACTION_ON_WISH_USERS" | "PROFILE_PICTURE_TAG" | "CREATE_OTHER_HOLD" | "INAPPROPRIATE_IN_HOUSE_TAG" | "CAN_ACCESS_V2_HOMEPAGE" | "MANAGE_SIZE_CHART" | "BRAND_REVIEW_RESOLUTION_TAG" | "FULFILLED_BY_WISH" | "CAN_REVIEW_EU_MERCHANTS" | "WISH_BLUE_ADMIN" | "IMAGE_CHANGE_RESOLUTION_TAG" | "VIEW_TAKEDOWN_REQUESTS" | "CAN_VIEW_BAN_INFRACTION" | "REVIEW_ONEOFF_REQ_ENABLE_COLLECTIONBOOST" | "REVIEW_ONEOFF_REQ_ISSUE_PB_CREDITS" | "MODIFY_MERCHANT_PAYMENT_HOLDS" | "CREATE_FAKE_TRACKING_FINE" | "REMOVE_INFRACTION_FINES" | "CAN_ACT_ON_MX_MERCHANT" | "CAN_REVIEW_PRODUCT_CATEGORY_DISPUTE" | "DETAIL_TAG" | "CREATE_HIGH_GAMING_GMV_HOLD" | "SUPPLY_CHAIN_PREVALID_TABLE_MAINTAINER" | "VALIDATE_COLLECTIONBOOST_COLLECTIONS" | "EDIT_MERCHANT_SUPPORT_PERMISSIONS" | "VIEW_ONEOFF_PAYMENT_DETAIL" | "CAN_VIEW_HR_RELATED_USERS" | "SUPPLY_CHAIN_DATA" | "CAN_VIEW_ALL_MERCHANT_FILES" | "CAN_MANAGE_KR_MERCHANT" | "CAN_INVITE_CN_MERCHANTS" | "HANDLE_ALL_TICKETS" | "WISH_BLUE_STORE_SUPPORT_PROFILE" | "UPDATE_PAYMENT_SETTINGS" | "EDIT_LEGAL_TEAM_PERMISSIONS" | "CREATE_RESPOND_TO_ADMIN_HOLD" | "VIEW_TRO_TOOLS" | "DISPUTE_CURRENCY" | "LISTING_REVIEW_AUDIT_IN_HOUSE_TAG" | "LOGIN_WITH_OAUTH" | "RESTRICT_REVIEW_CN_MERCHANTS" | "CAN_EDIT_SHIP_TO_STORE_PACKAGE" | "CNY_PROMOTED_DISABLE" | "CREATE_PRODUCT" | "REVIEW_ONEOFF_REQ_MERCHANT_EU_ENTITY" | "CHANGE_LANGUAGE" | "REVIEW_ONEOFF_REQ_CREATE_PB_SHADOW_CAMPAIGNS" | "HANDLE_CS_TICKETS" | "DETAIL_TAG_AUDIT" | "RESTRICTED_PRODUCT_REQUEST_EDITION" | "IP_VIOLATION_AUDIT_IN_HOUSE_TAG" | "REVIEW_ONEOFF_REQ_ENROLL_PRICE_DROP" | "REVERSE_ONEOFF_FINES" | "CAN_ACCESS_ONEOFF_API_REVIEW" | "REVIEW_ONEOFF_REQ_ISSUE_CB_CREDITS" | "CAN_USE_BP_DATA_TOOL" | "SHOW_ACCENTURE_TAGGERS" | "CAN_ACCESS_ONEOFF_API_LIST" | "CAN_VIEW_BLANKET_AUTHORIZATION_STATUS" | "VIEW_DECEPTIVE_FULFILLMENT_FINE" | "CAN_PROVIDE_MERCHANT_CHAT_SUPPORT" | "CAN_VIEW_WISH_USERS" | "CS_REP_STATS" | "FBW2" | "CHANGE_SELLER_PROFILE" | "SHOW_ALL_REFUND_PERFORMANCES" | "CAN_EDIT_EXTERNAL_FRAUD_TEAM_ACCESS" | "CREATE_WITHHOLD_FUND" | "VIEW_WISHPOST_NEGATIVE_BALANCE_HOLD" | "DEP_HANDLE_MERCHANT_BENEFITS" | "VIEW_TRO_HOLD" | "IP_VIOLATION_MANUAL_TAG" | "REVIEW_ONEOFF_REQ_REJECT_COLLECTIONBOOST_COLLECTION" | "CAN_ACCESS_BLANKET_AUTHORIZATION" | "IMAGE_CHANGE_TAG" | "REVIEW_ONEOFF_REQ_GIVE_BD_ACCESS" | "CAN_REVERSE_FINE" | "VIEW_RESTRICTED_PRODUCT_REQUEST" | "IP_VIOLATION_AUDIT_TAG" | "CAN_ISSUE_PB_CREDITS" | "CAN_ACCESS_ONEOFF_API_GET_FIELDS_INFO" | "CAN_VIEW_SHIP_TO_STORE_PACKAGE" | "CAN_TRANSFER_ANY_MERCHANTS" | "CAN_CHECK_INTERNAL_TRACKING" | "CAN_RECEIVE_SMS_ON_QA_ENV" | "VIEW_RESPOND_TO_ADMIN_HOLD" | "CAN_VIEW_MERCHANT_GROUP" | "VIEW_AUTHENTIC_BRAND_SELLER_BADGE_APPLICATIONS" | "CAN_HANDLE_LIVE_CHAT" | "CHANGE_EMAIL_SETTINGS" | "EDIT_PROMOTED_PRODUCTS" | "CAN_MANAGE_CHINESE_BDS" | "CAN_TOGGLE_MERCHANT_AUTOBAN" | "VIEW_ONEOFF_FINE" | "ENABLE_DISABLE_API_PARTNERS" | "EUB_LOGISTIC" | "MANAGE_DELIVERED_CARRIER" | "IP_VIOLATION_TAG" | "CAN_VIEW_FRAUD_INFRACTION_QUEUE" | "WISH_BLUE_AMBASSADOR_PROFILE" | "RESTRICT_REVIEW_US_MERCHANTS" | "EDIT_CONTENT_TEAM_PERMISSIONS" | "IDENTICAL_TOOL_TAG" | "CREATE_LCL_FBW_FEE" | "AUDIT_TICKET_REPLIES" | "VIEW_PRODUCT_PROFILE_PAGE" | "TRUE_BRAND_ESCALATION_TAG" | "VIEW_ALL_MERCHANTS" | "CAN_APPROVE_PRODUCT_BOOST_MERCHANTS" | "HOVERBOARD" | "UPDATE_TRACKING" | "EARLY_PAYMENT_RISK_CONTROL" | "CAN_VIEW_EPC_APPLICATION" | "EDIT_BRAND_PROTECTION_PERMISSIONS" | "SEND_SYSTEM_UPDATE_TO_FRAUD" | "SHOW_TAGGING_TEST_HISTORY" | "REVIEW_PRODUCT_EDIT_REQUESTS" | "API_ACCESS" | "TRIGGER_EARLY_SELLER_VERIFICATION" | "REPORTED_WISH_LOCAL_DETAIL_TAG" | "CREATE_BATCH_WARNING" | "EDIT_PRODUCT_LOGISTIC_METADATA" | "GENDER_TAG_MANUAL" | "EDIT_LOGICAL_TICKET_QUEUE_LIMITED" | "REVIEW_ONEOFF_REQ_ENROLL_PB_KICKSTART" | "LISTING_REVIEW_AUDIT_TAG" | "SEND_BD_ANNOUNCEMENTS" | "CAN_ACCESS_ORDERS_MANAGER" | "CAN_CREATE_BLUE_ADMIN" | "CAN_VIEW_CS_REPS" | "CAN_ALLOW_REPURCHASE" | "CAN_VIEW_US_BD_STATS" | "SEND_SYSTEM_UPDATE_TO_CS" | "SHOW_SEARCH_TOOL" | "CAN_VIEW_VMPI_ALERT" | "CAN_UPDATE_COLLECTIONBOOST" | "WISH_LOCAL_DETAIL_TAG" | "CAN_PERFORM_CHARGEBACK_REVIEW_AUDIT" | "CAN_USE_WISH_EXPRESS_SUPPORT_FEATURE" | "CREATE_HIGH_IP_INFRINGEMENT_HOLD" | "CAN_ACCESS_ONEOFF_PAGE_REVIEW" | "CAN_VIEW_FRAUD_WORKERS" | "VIEW_PAYMENT_DETAIL" | "SHOW_PRODUCT_LOGISTIC_METADATA" | "LISTING_REVIEW_TAG_IN_HOUSE" | "PRODUCT_RATING_TAG" | "CAN_ACT_ON_CN_MERCHANT" | "MANAGE_IDENTICAL_REVIEWS" | "SHOW_TAKEDOWN_REQUESTS" | "CAN_SEND_WECHAT_MESSAGE" | "CAN_VIEW_REGULATOR_REPORT_FILES" | "CREATE_FRAUDULENT_ACTIVITES_HOLD" | "CAN_REVIEW_RESPONSIBLE_PERSON" | "ACCESS_PSP_SIGN_UP" | "PRODUCT_RATING_VIDEO_TAG" | "CAN_MANAGE_BRAND_TO_PRODUCT" | "CAN_ACCESS_ONEOFF_PAGE_SUBMIT" | "INITIATE_PAYMENT_PROVIDER_SIGN_UP" | "SHOW_STORE_USERS" | "AUDIT_ALL_TEAM" | "CAN_VIEW_BDS" | "VIEW_DISBURSEMENT_PAGE" | "UPDATE_PRODUCTS" | "MANAGE_FBW_ORDERS" | "WISH_LOCAL_TAG_STATUS_CHECK" | "CREATE_WISHPOST_NEGATIVE_BALANCE_HOLD" | "SHOW_COUNTERFEIT_TAGGER_TEST_SPEC" | "REVIEW_ONEOFF_REQ_CREATE_NEW_MAX_TTD_EXTENSION" | "REVIEW_ONEOFF_REQ_REFUND_PB_BALANCE" | "CAN_VIEW_FACTORY_LIST" | "CREATE_TAG_JOB" | "EDIT_ALL_LOGICAL_QUEUES" | "FULFILL_ORDERS" | "VIEW_MERCHANT_RATING_PAGE" | "LOGIN_AS_MERCHANTS" | "CAN_ACCESS_ONEOFF_API_REMOVE" | "MANAGE_BLACKLIST_CRITERIA" | "MERCHANT_GAMING_REVIEW_ESCALATION" | "CHANGE_DISPLAY_SETTINGS" | "EDIT_ADMINS" | "VIEW_WISH_USERS" | "CAN_VIEW_US_INFRACTIONS" | "SHOW_ALL_TAGGERS" | "CAN_HANDLE_VIOLATION_REPORT" | "CAN_TRANSFER_MERCHANTS" | "CAN_VIEW_WISH_USER_INFO" | "TRUE_BRAND_RESOLUTION_TAG" | "SUPPLY_CHAIN_WAREHOUSE" | "CAN_BLOCK_USER_ON_USER_REVIEW" | "USE_CUSTOM_COLORS" | "GET_CURRENCY_INFO" | "REVIEW_ONEOFF_REQ_REMOVE_PRODUCTS" | "SHIPPING_ETA_TICKET_MERCHANT" | "SUPPLY_CHAIN_QC" | "VIEW_HIGH_GAMING_GMV_HOLD" | "CAN_VIEW_DISPUTES";
export declare type PlatformConstants = {
    readonly __typename?: "PlatformConstants";
    readonly merchantMobile: MerchantMobile;
    readonly countriesWeShipTo: ReadonlyArray<Country>;
    readonly euCountriesWeShipTo: ReadonlyArray<Country>;
    readonly wishExpressCountries: ReadonlyArray<Country>;
    readonly topLevelTags?: Maybe<ReadonlyArray<TrueTagSchema>>;
    readonly unityCountries: ReadonlyArray<Country>;
    readonly countriesAllowWeRegionalPrice: ReadonlyArray<Country>;
    readonly interselectablePhoneCountries: ReadonlyArray<Country>;
    readonly regions?: Maybe<ReadonlyArray<Region>>;
    readonly availableLocales?: Maybe<ReadonlyArray<Locale>>;
    readonly tax: TaxConstants;
    readonly productCsvImportColumns?: Maybe<ProductCsvImportSchema>;
    readonly orders: OrderConstants;
    readonly wishCompanyInfo: WishCompanyInfo;
    readonly deciderKey?: Maybe<DeciderKeySchema>;
    readonly cs?: Maybe<CustomerSupportConstants>;
    readonly buyerFraudReasons: ReadonlyArray<OrderRefundBuyerFraudSubreasonSchema>;
    readonly euVatCountries: ReadonlyArray<Country>;
    readonly wishEuVatPayerInfo?: Maybe<WishEuvatPayerInfo>;
    readonly productListing: ReadonlyArray<ProductListingTierSchema>;
    readonly staticFines?: Maybe<StaticFines>;
    readonly googleLogin?: Maybe<GoogleLoginDetails>;
    readonly brandProtection?: Maybe<BrandProtectionConstants>;
};
export declare type PlatformConstantsRegionsArgs = {
    countryCode: CountryCode;
};
export declare type PlatformSweepMutations = {
    readonly __typename?: "PlatformSweepMutations";
    readonly searchProducts?: Maybe<PlatformSweepProductSearch>;
    readonly flagProducts?: Maybe<PlatformSweepProductFlagging>;
    readonly emailResult?: Maybe<PlatformSweepResultEmail>;
};
export declare type PlatformSweepMutationsSearchProductsArgs = {
    input: PlatformSweepProductSearchInput;
};
export declare type PlatformSweepMutationsFlagProductsArgs = {
    input: PlatformSweepProductFlaggingInput;
};
export declare type PlatformSweepMutationsEmailResultArgs = {
    input: PlatformSweepResultEmailInput;
};
export declare type PlatformSweepProductFlagging = {
    readonly __typename?: "PlatformSweepProductFlagging";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type PlatformSweepProductFlaggingInput = {
    readonly sessionId: Scalars["ObjectIdType"];
    readonly query: Scalars["String"];
    readonly productIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
};
export declare type PlatformSweepProductSearch = {
    readonly __typename?: "PlatformSweepProductSearch";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly sessionId?: Maybe<Scalars["ObjectIdType"]>;
    readonly products?: Maybe<ReadonlyArray<ProductSchema>>;
};
export declare type PlatformSweepProductSearchInput = {
    readonly sessionId?: Maybe<Scalars["ObjectIdType"]>;
    readonly query: Scalars["String"];
    readonly offset?: Maybe<Scalars["Int"]>;
    readonly limit?: Maybe<Scalars["Int"]>;
    readonly countryCode?: Maybe<CountryCode>;
    readonly excludingL2lSubcategories?: Maybe<ReadonlyArray<TaggingViolationSubReasonCode>>;
    readonly isBba?: Maybe<Scalars["Boolean"]>;
    readonly isCompanyOwned?: Maybe<Scalars["Boolean"]>;
};
export declare type PlatformSweepResultEmail = {
    readonly __typename?: "PlatformSweepResultEmail";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type PlatformSweepResultEmailInput = {
    readonly sessionId: Scalars["ObjectIdType"];
    readonly recipient: Scalars["String"];
};
export declare type PlusAdminServiceMutations = {
    readonly __typename?: "PlusAdminServiceMutations";
    readonly convertToPlus?: Maybe<ConvertToPlus>;
    readonly removeFromPlus?: Maybe<RemoveFromPlus>;
};
export declare type PlusAdminServiceMutationsConvertToPlusArgs = {
    merchantIds: ReadonlyArray<Scalars["ObjectIdType"]>;
};
export declare type PlusAdminServiceMutationsRemoveFromPlusArgs = {
    merchantIds: ReadonlyArray<Scalars["ObjectIdType"]>;
};
export declare type PolicyAdminSchema = {
    readonly __typename?: "PolicyAdminSchema";
    readonly merchantPolicyTiers?: Maybe<ReadonlyArray<MerchantPolicyTierSchema>>;
    readonly merchantGamingReviewTicketsCount?: Maybe<Scalars["Int"]>;
    readonly merchantGamingReviewTicketsOpenStates?: Maybe<ReadonlyArray<MerchantGamingReviewState>>;
    readonly merchantGamingReviewTicketsClosedStates?: Maybe<ReadonlyArray<MerchantGamingReviewState>>;
    readonly merchantGamingReviewTickets?: Maybe<ReadonlyArray<MerchantGamingReviewTicketSchema>>;
};
export declare type PolicyAdminSchemaMerchantGamingReviewTicketsCountArgs = {
    states?: Maybe<ReadonlyArray<MerchantGamingReviewState>>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
    claimedAdminName?: Maybe<Scalars["String"]>;
    lastSourceUpsertDateStart?: Maybe<DatetimeInput>;
    lastSourceUpsertDateEnd?: Maybe<DatetimeInput>;
    id?: Maybe<Scalars["ObjectIdType"]>;
    isClaimed?: Maybe<Scalars["Boolean"]>;
};
export declare type PolicyAdminSchemaMerchantGamingReviewTicketsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    claimedAdminName?: Maybe<Scalars["String"]>;
    lastSourceUpsertDateStart?: Maybe<DatetimeInput>;
    lastSourceUpsertDateEnd?: Maybe<DatetimeInput>;
    states?: Maybe<ReadonlyArray<MerchantGamingReviewState>>;
    sort?: Maybe<MerchantGamingReviewTicketSort>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
    id?: Maybe<Scalars["ObjectIdType"]>;
    isClaimed?: Maybe<Scalars["Boolean"]>;
};
export declare type PolicyAnnouncementItemSchema = {
    readonly __typename?: "PolicyAnnouncementItemSchema";
    readonly section: Scalars["String"];
    readonly requireLogIn: Scalars["Boolean"];
    readonly announcementId?: Maybe<Scalars["ObjectIdType"]>;
    readonly effectiveDate?: Maybe<Datetime>;
};
export declare type PolicyFactor = "MISLEADING_PRODUCT" | "INAPPROPRIATE_SALE" | "PRODUCT_SWAP" | "MERCHANT_CANCELLATION" | "HIGH_IP_INFRINGEMENT" | "WSS_BAN_POLICY" | "WISH_EXPRESS_LATE" | "LATE_CONFIRM_FULFILLMENT" | "WISH_EXPRESS_LATE_WITHHOLD" | "WISH_EXPRESS_BAN" | "HIGH_AUTO_REFUND" | "GATE_KEEPER_ATO" | "HIGH_GAMING_GMV" | "MISLEADING_VARIATION" | "FAKE_TRACKING" | "HIGH_REFUND_RATE" | "LOW_STORE_RATE" | "STRIKE_BASED_HIGH_RISK_PROHIBITED" | "PRODUCT_HIGH_REFUND_RATE" | "VALID_TRACKING_RATE" | "RECALL_POLICY" | "UNQUALIFIED_CARRIER" | "FAKE_TRACKING_BY_WEIGHT" | "AUTO_REFUND" | "HIGH_AUTO_REFUND_RATE" | "REPEAT_IP_INFRINGEMENT" | "COUNTERFEIT_GOODS" | "CS_LOW_CSAT_SCORE" | "CS_LATE_RESPONSE_RATE" | "NEGATIVE_BALANCE" | "HIGH_CANCEL_RATE";
export declare type PolicyMutations = {
    readonly __typename?: "PolicyMutations";
    readonly adaptivePolicyAdmin?: Maybe<AdaptivePolicyAdminMutations>;
    readonly restrictedProduct?: Maybe<RestrictedProductMutations>;
    readonly euCompliance?: Maybe<EuComplianceMutations>;
    readonly merchantFinalSale?: Maybe<MerchantFinalSaleMutations>;
    readonly merchantGamingReviewTicket?: Maybe<MerchantGamingReviewMutations>;
    readonly merchantWarning?: Maybe<MerchantWarningMutations>;
    readonly productCategoryDispute?: Maybe<ProductCategoryDisputeMutations>;
    readonly wfp?: Maybe<WfpMutations>;
};
export declare type PolicyPublicMutations = {
    readonly __typename?: "PolicyPublicMutations";
    readonly reportAbuse: ReportAbuseMutations;
};
export declare type PolicyPublicSchema = {
    readonly __typename?: "PolicyPublicSchema";
    readonly announcements?: Maybe<ReadonlyArray<PolicyAnnouncementItemSchema>>;
    readonly reportAbuse: ReportAbuseHub;
};
export declare type PolicySchema = {
    readonly __typename?: "PolicySchema";
    readonly admin?: Maybe<PolicyAdminSchema>;
    readonly finalSaleCategories?: Maybe<ReadonlyArray<FinalSaleCategorySchema>>;
    readonly merchantWarningCount?: Maybe<Scalars["Int"]>;
    readonly merchantWarnings?: Maybe<ReadonlyArray<MerchantWarningSchema>>;
    readonly merchantWarningReasons?: Maybe<ReadonlyArray<MerchantWarningReasonSchema>>;
    readonly restrictedProduct?: Maybe<RestrictedProductSchema>;
    readonly productCompliance?: Maybe<ProductComplianceSchema>;
    readonly productCategoryDispute?: Maybe<ProductCategoryDisputeHub>;
    readonly dispute?: Maybe<DisputeSchema>;
};
export declare type PolicySchemaFinalSaleCategoriesArgs = {
    merchantId: Scalars["ObjectIdType"];
};
export declare type PolicySchemaMerchantWarningCountArgs = {
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
    id?: Maybe<Scalars["ObjectIdType"]>;
    banned?: Maybe<Scalars["Boolean"]>;
    fined?: Maybe<Scalars["Boolean"]>;
    reasons?: Maybe<ReadonlyArray<MerchantWarningReason>>;
    states?: Maybe<ReadonlyArray<MerchantWarningState>>;
    isMisleading?: Maybe<Scalars["Boolean"]>;
    disputePendingEditReview?: Maybe<Scalars["Boolean"]>;
    disputePendingBrandAuth?: Maybe<Scalars["Boolean"]>;
    auditStatuses?: Maybe<ReadonlyArray<MerchantWarningAuditStatus>>;
    claimStatus?: Maybe<MerchantWarningClaimStatus>;
};
export declare type PolicySchemaMerchantWarningsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
    id?: Maybe<Scalars["ObjectIdType"]>;
    banned?: Maybe<Scalars["Boolean"]>;
    fined?: Maybe<Scalars["Boolean"]>;
    auditStatuses?: Maybe<ReadonlyArray<MerchantWarningAuditStatus>>;
    claimStatus?: Maybe<MerchantWarningClaimStatus>;
    sort?: Maybe<MerchantWarningSort>;
    reasons?: Maybe<ReadonlyArray<MerchantWarningReason>>;
    states?: Maybe<ReadonlyArray<MerchantWarningState>>;
    disputePendingEditReview?: Maybe<Scalars["Boolean"]>;
    disputePendingBrandAuth?: Maybe<Scalars["Boolean"]>;
};
export declare type ProductAnalyticsDimension = "COUNTRY" | "GENDER";
export declare type ProductAnalyticsInterval = "INTERVAL_UNSPECIFIED" | "INTERVAL_DAY" | "INTERVAL_MINUTE" | "INTERVAL_HOUR" | "INTERVAL_WEEK" | "INTERVAL_MONTH";
export declare type ProductAnalyticsSchema = {
    readonly __typename?: "ProductAnalyticsSchema";
    readonly productId: Scalars["String"];
    readonly enabled: Scalars["Boolean"];
    readonly stats?: Maybe<ProductAnalyticsStats>;
};
export declare type ProductAnalyticsSchemaStatsArgs = {
    startTime: DatetimeInput;
    endTime: DatetimeInput;
    interval?: Maybe<ProductAnalyticsInterval>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
};
export declare type ProductAnalyticsStats = {
    readonly __typename?: "ProductAnalyticsStats";
    readonly startTime: Datetime;
    readonly endTime: Datetime;
    readonly interval: ProductAnalyticsInterval;
    readonly interactionStats: ReadonlyArray<ProductInteractionStats>;
    readonly orderStats: ReadonlyArray<ProductOrderStats>;
};
export declare type ProductAnalyticsStatsInteractionStatsArgs = {
    dimensions?: Maybe<ReadonlyArray<ProductAnalyticsDimension>>;
};
export declare type ProductAnalyticsStatsOrderStatsArgs = {
    dimensions?: Maybe<ReadonlyArray<ProductAnalyticsDimension>>;
};
export declare type ProductAttributeSchema = {
    readonly __typename?: "ProductAttributeSchema";
    readonly name: Scalars["String"];
    readonly value: Scalars["String"];
};
export declare type ProductBoostAcceptTos = {
    readonly __typename?: "ProductBoostAcceptTOS";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ProductBoostAcceptTosInput = {
    readonly tosVersion: Scalars["Int"];
};
export declare type ProductCatalogMutations = {
    readonly __typename?: "ProductCatalogMutations";
    readonly upsertProduct?: Maybe<UpsertProduct>;
    readonly removeProduct?: Maybe<RemoveProduct>;
    readonly upsertProductCsvFile?: Maybe<UpsertProductsFromCsvFile>;
    readonly downloadAllProductsCsv?: Maybe<DownloadAllProductsCsv>;
    readonly updateProductLogisticsMetadata?: Maybe<UpdateProductLogisticsMetadata>;
};
export declare type ProductCatalogMutationsUpsertProductArgs = {
    input?: Maybe<ProductUpsertInput>;
};
export declare type ProductCatalogMutationsRemoveProductArgs = {
    input: RemoveProductInput;
};
export declare type ProductCatalogMutationsUpsertProductCsvFileArgs = {
    input: UpsertProductsFromCsvFileInput;
};
export declare type ProductCatalogMutationsDownloadAllProductsCsvArgs = {
    input: DownloadAllProductsCsvInput;
};
export declare type ProductCatalogMutationsUpdateProductLogisticsMetadataArgs = {
    input: UpdateProductLogisticsMetadataInput;
};
export declare type ProductCatalogSchema = {
    readonly __typename?: "ProductCatalogSchema";
    readonly product?: Maybe<ProductSchema>;
    readonly products: ReadonlyArray<ProductSchema>;
    readonly productCount: Scalars["Int"];
    readonly variation?: Maybe<VariationSchema>;
    readonly variations: ReadonlyArray<VariationSchema>;
    readonly variationCount?: Maybe<Scalars["Int"]>;
    readonly upcProductService: UpcProductServiceSchema;
    readonly bulkCsvProductImportJobs: ReadonlyArray<CsvProductImportJobSchema>;
    readonly csvProductImportJobsCount: Scalars["Int"];
    readonly gtinProductService: GtinProductServiceSchema;
};
export declare type ProductCatalogSchemaProductArgs = {
    id?: Maybe<Scalars["String"]>;
    sku?: Maybe<Scalars["String"]>;
};
export declare type ProductCatalogSchemaProductsArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ProductSearchType>;
    shippingProfileIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    sort?: Maybe<ProductSort>;
    productStatuses?: Maybe<ReadonlyArray<CommerceProductStatus>>;
    shippingTypes?: Maybe<ReadonlyArray<WarehouseShippingType>>;
    videoStates?: Maybe<ReadonlyArray<ProductVideoState>>;
};
export declare type ProductCatalogSchemaProductCountArgs = {
    query?: Maybe<Scalars["String"]>;
    productStatuses?: Maybe<ReadonlyArray<CommerceProductStatus>>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
    shippingTypes?: Maybe<ReadonlyArray<WarehouseShippingType>>;
    searchType?: Maybe<ProductSearchType>;
    shippingProfileIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    videoStates?: Maybe<ReadonlyArray<ProductVideoState>>;
};
export declare type ProductCatalogSchemaVariationArgs = {
    id?: Maybe<Scalars["String"]>;
    sku?: Maybe<Scalars["String"]>;
};
export declare type ProductCatalogSchemaVariationsArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<VariationSearchType>;
    offset?: Maybe<Scalars["Int"]>;
    sort?: Maybe<VariationSort>;
    limit?: Maybe<Scalars["Int"]>;
};
export declare type ProductCatalogSchemaVariationCountArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<VariationSearchType>;
};
export declare type ProductCatalogSchemaBulkCsvProductImportJobsArgs = {
    offset?: Scalars["Int"];
    limit?: Scalars["Int"];
    feedType?: Maybe<ProductCsvJobType>;
};
export declare type ProductCatalogSchemaCsvProductImportJobsCountArgs = {
    feedType?: Maybe<ProductCsvJobType>;
};
export declare type ProductCategoryDisputeAction = "CREATE" | "MARK_UPDATE" | "MARK_UNCHANGE";
export declare type ProductCategoryDisputeAdminUnchangedReason = "IMAGE_MISMATCH" | "PROPOSED_TAG_IS_INAPPROPRIATE" | "OTHER" | "CORRECT_TAGGED";
export declare type ProductCategoryDisputeEligibility = "OUT_OF_QUOTA" | "INELIGIBLE" | "ELIGIBLE";
export declare type ProductCategoryDisputeHub = {
    readonly __typename?: "ProductCategoryDisputeHub";
    readonly disputeCount?: Maybe<Scalars["Int"]>;
    readonly disputes?: Maybe<ReadonlyArray<ProductCategoryDisputeSchema>>;
    readonly dispute?: Maybe<ProductCategoryDisputeSchema>;
    readonly reasons?: Maybe<ReadonlyArray<ProductCategoryDisputeReasonSchema>>;
};
export declare type ProductCategoryDisputeHubDisputeCountArgs = {
    searchType?: Maybe<ProductCategoryDisputeSearchType>;
    query?: Maybe<Scalars["String"]>;
    states: ReadonlyArray<ProductCategoryDisputeStatus>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type ProductCategoryDisputeHubDisputesArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    searchType?: Maybe<ProductCategoryDisputeSearchType>;
    query?: Maybe<Scalars["String"]>;
    states: ReadonlyArray<ProductCategoryDisputeStatus>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type ProductCategoryDisputeHubDisputeArgs = {
    id: Scalars["ObjectIdType"];
};
export declare type ProductCategoryDisputeHubReasonsArgs = {
    source: ProductCategoryDisputeSource;
};
export declare type ProductCategoryDisputeMutations = {
    readonly __typename?: "ProductCategoryDisputeMutations";
    readonly upsertProductCategoryDispute?: Maybe<UpsertProductCategoryDispute>;
};
export declare type ProductCategoryDisputeMutationsUpsertProductCategoryDisputeArgs = {
    input?: Maybe<UpsertProductCategoryDisputeInput>;
};
export declare type ProductCategoryDisputeReason = "INCORRECT_TAG" | "OTHERS";
export declare type ProductCategoryDisputeReasonSchema = {
    readonly __typename?: "ProductCategoryDisputeReasonSchema";
    readonly reason: ProductCategoryDisputeReason;
    readonly text: Scalars["String"];
};
export declare type ProductCategoryDisputeSchema = {
    readonly __typename?: "ProductCategoryDisputeSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly merchant: MerchantSchema;
    readonly product: ProductSchema;
    readonly status: ProductCategoryDisputeStatus;
    readonly lastUpdate?: Maybe<Datetime>;
    readonly adminActionId?: Maybe<Scalars["ObjectIdType"]>;
    readonly adminUnchangedReason?: Maybe<ProductCategoryDisputeAdminUnchangedReason>;
    readonly reason?: Maybe<ProductCategoryDisputeReasonSchema>;
    readonly source: ProductCategoryDisputeSource;
    readonly adminUnchangedOtherReasonDetails?: Maybe<Scalars["String"]>;
    readonly merchantNote?: Maybe<Scalars["String"]>;
    readonly supportedFiles?: Maybe<ReadonlyArray<MerchantFileSchema>>;
    readonly trueTags?: Maybe<ReadonlyArray<TrueTagSchema>>;
};
export declare type ProductCategoryDisputeSchemaTrueTagsArgs = {
    state?: Maybe<ProductCategoryDisputeTrueTagState>;
};
export declare type ProductCategoryDisputeSearchType = "MERCHANT_ID" | "PRODUCT_ID" | "DISPUTE_ID";
export declare type ProductCategoryDisputeSource = "EU_COMPLIANCE" | "PRODUCT_CATELOG";
export declare type ProductCategoryDisputeStatus = "RESOLVED_UNCHANGED" | "RESOLVED_UPDATE" | "PENDING_REVIEW";
export declare type ProductCategoryDisputeTrueTagState = "DISPUTED" | "APPROVED" | "PROPOSED";
export declare type ProductComplianceSchema = {
    readonly __typename?: "ProductComplianceSchema";
    readonly responsiblePersonCount?: Maybe<Scalars["Int"]>;
    readonly responsiblePersons?: Maybe<ReadonlyArray<ResponsiblePersonSchema>>;
    readonly rpValidCountries: ReadonlyArray<EuComplianceResponsiblePersonCountriesAndRegions>;
    readonly linkCount?: Maybe<Scalars["Int"]>;
    readonly links?: Maybe<ReadonlyArray<LinkProductComplianceSchema>>;
    readonly allMsrCategories?: Maybe<ReadonlyArray<MsrCategory>>;
    readonly productDestinationCountries: ReadonlyArray<Country>;
    readonly responsiblePersonRejectReasons: ReadonlyArray<ResponsiblePersonRejectReasonSchema>;
};
export declare type ProductComplianceSchemaResponsiblePersonCountArgs = {
    complianceType: ResponsiblePersonCompliance;
    states?: Maybe<ReadonlyArray<ResponsiblePersonStatus>>;
};
export declare type ProductComplianceSchemaResponsiblePersonsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    complianceType: ResponsiblePersonCompliance;
    sort?: Maybe<ResponsiblePersonSort>;
    states?: Maybe<ReadonlyArray<ResponsiblePersonStatus>>;
};
export declare type ProductComplianceSchemaLinkCountArgs = {
    complianceTypes?: Maybe<ReadonlyArray<ResponsiblePersonCompliance>>;
    states?: Maybe<ReadonlyArray<LinkProductComplianceState>>;
    categories?: Maybe<ReadonlyArray<MsrCategory>>;
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ProductComplianceSearchType>;
    responsiblePersonIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
};
export declare type ProductComplianceSchemaLinksArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    complianceTypes?: Maybe<ReadonlyArray<ResponsiblePersonCompliance>>;
    states?: Maybe<ReadonlyArray<LinkProductComplianceState>>;
    categories?: Maybe<ReadonlyArray<MsrCategory>>;
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ProductComplianceSearchType>;
    responsiblePersonIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
};
export declare type ProductComplianceSearchType = "PRODUCT_ID";
export declare type ProductCountryBlockSchema = {
    readonly __typename?: "ProductCountryBlockSchema";
    readonly productId: Scalars["ObjectIdType"];
    readonly countriesBlocked?: Maybe<ReadonlyArray<Country>>;
};
export declare type ProductCsvImportColumnId = "PRODUCT_NAME" | "CATEGORY" | "MAIN_IMAGE_URL" | "DESCRIPTION" | "VARIATION_IMAGE_URL" | "LOCAL_CURRENCY_CODE" | "EXTRA_IMAGE_URL" | "PARENT_UNIQUE_ID" | "UNIQUE_ID" | "LOCALIZED_COST" | "LOCALIZED_SHIPPING_COST" | "LOCALIZED_PRICE" | "LOCALIZED_SHIPPING" | "MSRP" | "QUANTITY" | "UPC" | "COLOR" | "SIZE" | "TAGS" | "BRAND" | "BRAND_ID" | "COUNTRY_OF_ORIGIN" | "DECLARED_LOCAL_NAME" | "CONTAINS_LIQUID" | "CONTAINS_METAL" | "CONTAINS_POWDER" | "PIECES_INCLUDED" | "CLEAN_IMAGE_URL" | "DECLARED_NAME" | "CUSTOMS_HS_CODE" | "PACKAGE_WIDTH" | "MAX_QUANTITY" | "PACKAGE_LENGTH" | "PACKAGE_HEIGHT" | "PACKAGE_WEIGHT" | "CONTAINS_BATTERY" | "SHIPPING_TIME" | "LANDING_PAGE_URL" | "CUSTOM_DECLARED_VALUE" | "WAREHOUSE_NAME" | "ENABLE" | "DISABLE" | "LOCALIZED_DEFAULT_SHIPPING_PRICE" | "CONDITION" | "REFERENCE_VALUE" | "UNIT" | "QUANTITY_VALUE" | "DEMO_VIDEO_ASSET_URL" | "LOCALIZED_BD" | "BD_TTD" | "LOCALIZED_BE" | "BE_TTD" | "LOCALIZED_FR" | "FR_TTD" | "LOCALIZED_BG" | "BG_TTD" | "LOCALIZED_BA" | "BA_TTD" | "LOCALIZED_BB" | "BB_TTD" | "LOCALIZED_BM" | "BM_TTD" | "LOCALIZED_BO" | "BO_TTD" | "LOCALIZED_JP" | "JP_TTD" | "LOCALIZED_KZ" | "KZ_TTD" | "LOCALIZED_BT" | "BT_TTD" | "LOCALIZED_JM" | "JM_TTD" | "LOCALIZED_ZA" | "ZA_TTD" | "LOCALIZED_JO" | "JO_TTD" | "LOCALIZED_TO" | "TO_TTD" | "LOCALIZED_BR" | "BR_TTD" | "LOCALIZED_BS" | "BS_TTD" | "LOCALIZED_FI" | "FI_TTD" | "LOCALIZED_FJ" | "FJ_TTD" | "LOCALIZED_BZ" | "BZ_TTD" | "LOCALIZED_RU" | "RU_TTD" | "LOCALIZED_NL" | "NL_TTD" | "LOCALIZED_NO" | "NO_TTD" | "LOCALIZED_NA" | "NA_TTD" | "LOCALIZED_KY" | "KY_TTD" | "LOCALIZED_NG" | "NG_TTD" | "LOCALIZED_RE" | "RE_TTD" | "LOCALIZED_NZ" | "NZ_TTD" | "LOCALIZED_PA" | "PA_TTD" | "LOCALIZED_MN" | "MN_TTD" | "LOCALIZED_NP" | "NP_TTD" | "LOCALIZED_RO" | "RO_TTD" | "LOCALIZED_NU" | "NU_TTD" | "LOCALIZED_CH" | "CH_TTD" | "LOCALIZED_CO" | "CO_TTD" | "LOCALIZED_GR" | "GR_TTD" | "LOCALIZED_CL" | "CL_TTD" | "LOCALIZED_BH" | "BH_TTD" | "LOCALIZED_CA" | "CA_TTD" | "LOCALIZED_SH" | "SH_TTD" | "LOCALIZED_GY" | "GY_TTD" | "LOCALIZED_CZ" | "CZ_TTD" | "LOCALIZED_CY" | "CY_TTD" | "LOCALIZED_GD" | "GD_TTD" | "LOCALIZED_GB" | "GB_TTD" | "LOCALIZED_GA" | "GA_TTD" | "LOCALIZED_VN" | "VN_TTD" | "LOCALIZED_CR" | "CR_TTD" | "LOCALIZED_NI" | "NI_TTD" | "LOCALIZED_GI" | "GI_TTD" | "LOCALIZED_GH" | "GH_TTD" | "LOCALIZED_SZ" | "SZ_TTD" | "LOCALIZED_OM" | "OM_TTD" | "LOCALIZED_TN" | "TN_TTD" | "LOCALIZED_KG" | "KG_TTD" | "LOCALIZED_KE" | "KE_TTD" | "LOCALIZED_SR" | "SR_TTD" | "LOCALIZED_KH" | "KH_TTD" | "LOCALIZED_SV" | "SV_TTD" | "LOCALIZED_SK" | "SK_TTD" | "LOCALIZED_KR" | "KR_TTD" | "LOCALIZED_SI" | "SI_TTD" | "LOCALIZED_BW" | "BW_TTD" | "LOCALIZED_KW" | "KW_TTD" | "LOCALIZED_SM" | "SM_TTD" | "LOCALIZED_SC" | "SC_TTD" | "LOCALIZED_DZ" | "DZ_TTD" | "LOCALIZED_SA" | "SA_TTD" | "LOCALIZED_SG" | "SG_TTD" | "LOCALIZED_SE" | "SE_TTD" | "LOCALIZED_DO" | "DO_TTD" | "LOCALIZED_DM" | "DM_TTD" | "LOCALIZED_DK" | "DK_TTD" | "LOCALIZED_HR" | "HR_TTD" | "LOCALIZED_DE" | "DE_TTD" | "LOCALIZED_HU" | "HU_TTD" | "LOCALIZED_GT" | "GT_TTD" | "LOCALIZED_HN" | "HN_TTD" | "LOCALIZED_US" | "US_TTD" | "LOCALIZED_JE" | "JE_TTD" | "LOCALIZED_AD" | "AD_TTD" | "LOCALIZED_PR" | "PR_TTD" | "LOCALIZED_MU" | "MU_TTD" | "LOCALIZED_LC" | "LC_TTD" | "LOCALIZED_PT" | "PT_TTD" | "LOCALIZED_TW" | "TW_TTD" | "LOCALIZED_TT" | "TT_TTD" | "LOCALIZED_PY" | "PY_TTD" | "LOCALIZED_TR" | "TR_TTD" | "LOCALIZED_LK" | "LK_TTD" | "LOCALIZED_LI" | "LI_TTD" | "LOCALIZED_LV" | "LV_TTD" | "LOCALIZED_AI" | "AI_TTD" | "LOCALIZED_LT" | "LT_TTD" | "LOCALIZED_LU" | "LU_TTD" | "LOCALIZED_UY" | "UY_TTD" | "LOCALIZED_TH" | "TH_TTD" | "LOCALIZED_PE" | "PE_TTD" | "LOCALIZED_PK" | "PK_TTD" | "LOCALIZED_PH" | "PH_TTD" | "LOCALIZED_IS" | "IS_TTD" | "LOCALIZED_PL" | "PL_TTD" | "LOCALIZED_ZM" | "ZM_TTD" | "LOCALIZED_AE" | "AE_TTD" | "LOCALIZED_VE" | "VE_TTD" | "LOCALIZED_AG" | "AG_TTD" | "LOCALIZED_VG" | "VG_TTD" | "LOCALIZED_EE" | "EE_TTD" | "LOCALIZED_VI" | "VI_TTD" | "LOCALIZED_EG" | "EG_TTD" | "LOCALIZED_AM" | "AM_TTD" | "LOCALIZED_AL" | "AL_TTD" | "LOCALIZED_EC" | "EC_TTD" | "LOCALIZED_IT" | "IT_TTD" | "LOCALIZED_AR" | "AR_TTD" | "LOCALIZED_AU" | "AU_TTD" | "LOCALIZED_AT" | "AT_TTD" | "LOCALIZED_AW" | "AW_TTD" | "LOCALIZED_IN" | "IN_TTD" | "LOCALIZED_AZ" | "AZ_TTD" | "LOCALIZED_IE" | "IE_TTD" | "LOCALIZED_ID" | "ID_TTD" | "LOCALIZED_ES" | "ES_TTD" | "LOCALIZED_ME" | "ME_TTD" | "LOCALIZED_MD" | "MD_TTD" | "LOCALIZED_MA" | "MA_TTD" | "LOCALIZED_MC" | "MC_TTD" | "LOCALIZED_UZ" | "UZ_TTD" | "LOCALIZED_MM" | "MM_TTD" | "LOCALIZED_UA" | "UA_TTD" | "LOCALIZED_RS" | "RS_TTD" | "LOCALIZED_GE" | "GE_TTD" | "LOCALIZED_MK" | "MK_TTD" | "LOCALIZED_QA" | "QA_TTD" | "LOCALIZED_MT" | "MT_TTD" | "LOCALIZED_MV" | "MV_TTD" | "LOCALIZED_MS" | "MS_TTD" | "LOCALIZED_MY" | "MY_TTD" | "LOCALIZED_MX" | "MX_TTD" | "LOCALIZED_IL" | "IL_TTD" | "LOCALIZED_BR_RJC" | "BR_RJC_TTD" | "LOCALIZED_US_MO" | "US_MO_TTD" | "LOCALIZED_US_PA" | "US_PA_TTD" | "LOCALIZED_US_NV" | "US_NV_TTD" | "LOCALIZED_BR_PRI" | "BR_PRI_TTD" | "LOCALIZED_FR_YT" | "FR_YT_TTD" | "LOCALIZED_US_NE" | "US_NE_TTD" | "LOCALIZED_US_NH" | "US_NH_TTD" | "LOCALIZED_BR_BAI" | "BR_BAI_TTD" | "LOCALIZED_FR_GF" | "FR_GF_TTD" | "LOCALIZED_US_AP" | "US_AP_TTD" | "LOCALIZED_US_NM" | "US_NM_TTD" | "LOCALIZED_US_HI" | "US_HI_TTD" | "LOCALIZED_US_AE" | "US_AE_TTD" | "LOCALIZED_FR_PF" | "FR_PF_TTD" | "LOCALIZED_AU_WA" | "AU_WA_TTD" | "LOCALIZED_US_MP" | "US_MP_TTD" | "LOCALIZED_DK_GL" | "DK_GL_TTD" | "LOCALIZED_BR_BAC" | "BR_BAC_TTD" | "LOCALIZED_US_GA" | "US_GA_TTD" | "LOCALIZED_US_DE" | "US_DE_TTD" | "LOCALIZED_AU_SA" | "AU_SA_TTD" | "LOCALIZED_AU_JBT" | "AU_JBT_TTD" | "LOCALIZED_US_OK" | "US_OK_TTD" | "LOCALIZED_US_AS" | "US_AS_TTD" | "LOCALIZED_US_VA" | "US_VA_TTD" | "LOCALIZED_US_KY" | "US_KY_TTD" | "LOCALIZED_US_ME" | "US_ME_TTD" | "LOCALIZED_US_IN" | "US_IN_TTD" | "LOCALIZED_US_MS" | "US_MS_TTD" | "LOCALIZED_US_NC" | "US_NC_TTD" | "LOCALIZED_US_AK" | "US_AK_TTD" | "LOCALIZED_US_SD" | "US_SD_TTD" | "LOCALIZED_US_TN" | "US_TN_TTD" | "LOCALIZED_US_WY" | "US_WY_TTD" | "LOCALIZED_US_LA" | "US_LA_TTD" | "LOCALIZED_US_IA" | "US_IA_TTD" | "LOCALIZED_US_ND" | "US_ND_TTD" | "LOCALIZED_AU_TAS" | "AU_TAS_TTD" | "LOCALIZED_US_ID" | "US_ID_TTD" | "LOCALIZED_US_NY" | "US_NY_TTD" | "LOCALIZED_US_SC" | "US_SC_TTD" | "LOCALIZED_FR_WF" | "FR_WF_TTD" | "LOCALIZED_US_IL" | "US_IL_TTD" | "LOCALIZED_US_WI" | "US_WI_TTD" | "LOCALIZED_BR_SFB" | "BR_SFB_TTD" | "LOCALIZED_BR_MGI" | "BR_MGI_TTD" | "LOCALIZED_US_OR" | "US_OR_TTD" | "LOCALIZED_FR_GP" | "FR_GP_TTD" | "LOCALIZED_US_FL" | "US_FL_TTD" | "LOCALIZED_AU_ACT" | "AU_ACT_TTD" | "LOCALIZED_US_KS" | "US_KS_TTD" | "LOCALIZED_FR_PM" | "FR_PM_TTD" | "LOCALIZED_US_CO" | "US_CO_TTD" | "LOCALIZED_AU_NSW" | "AU_NSW_TTD" | "LOCALIZED_BR_RSC" | "BR_RSC_TTD" | "LOCALIZED_US_AL" | "US_AL_TTD" | "LOCALIZED_US_WA" | "US_WA_TTD" | "LOCALIZED_US_MI" | "US_MI_TTD" | "LOCALIZED_US_OH" | "US_OH_TTD" | "LOCALIZED_US_AA" | "US_AA_TTD" | "LOCALIZED_ES_CN" | "ES_CN_TTD" | "LOCALIZED_BR_PRC" | "BR_PRC_TTD" | "LOCALIZED_BR_MGC" | "BR_MGC_TTD" | "LOCALIZED_FR_RE" | "FR_RE_TTD" | "LOCALIZED_AU_QLD" | "AU_QLD_TTD" | "LOCALIZED_US_MT" | "US_MT_TTD" | "LOCALIZED_US_MN" | "US_MN_TTD" | "LOCALIZED_US_CT" | "US_CT_TTD" | "LOCALIZED_BR_SPC" | "BR_SPC_TTD" | "LOCALIZED_US_MA" | "US_MA_TTD" | "LOCALIZED_FR_NC" | "FR_NC_TTD" | "LOCALIZED_US_TX" | "US_TX_TTD" | "LOCALIZED_US_AZ" | "US_AZ_TTD" | "LOCALIZED_US_UT" | "US_UT_TTD" | "LOCALIZED_US_NJ" | "US_NJ_TTD" | "LOCALIZED_US_RI" | "US_RI_TTD" | "LOCALIZED_BR_RJI" | "BR_RJI_TTD" | "LOCALIZED_US_WV" | "US_WV_TTD" | "LOCALIZED_US_CA" | "US_CA_TTD" | "LOCALIZED_US_AR" | "US_AR_TTD" | "LOCALIZED_BR_SPI" | "BR_SPI_TTD" | "LOCALIZED_AU_VIC" | "AU_VIC_TTD" | "LOCALIZED_FR_MQ" | "FR_MQ_TTD" | "LOCALIZED_US_DC" | "US_DC_TTD" | "LOCALIZED_US_MD" | "US_MD_TTD" | "LOCALIZED_AU_NT" | "AU_NT_TTD" | "LOCALIZED_FR_MF" | "FR_MF_TTD" | "LOCALIZED_US_VT" | "US_VT_TTD" | "LOCALIZED_US_GU" | "US_GU_TTD" | "SKIP_HEADER";
export declare type ProductCsvImportColumnSchema = {
    readonly __typename?: "ProductCSVImportColumnSchema";
    readonly columnId: ProductCsvImportColumnId;
    readonly name: Scalars["String"];
    readonly isRequired: IsRequiredEnum;
    readonly category?: Maybe<ColumnCategorySchema>;
};
export declare type ProductCsvImportColumnSchemaIsRequiredArgs = {
    feedType?: Maybe<ProductCsvJobType>;
};
export declare type ProductCsvImportSchema = {
    readonly __typename?: "ProductCSVImportSchema";
    readonly columns: ReadonlyArray<ProductCsvImportColumnSchema>;
    readonly requiredColumns: ReadonlyArray<ProductCsvImportColumnSchema>;
    readonly optionalColumns: ReadonlyArray<ProductCsvImportColumnSchema>;
};
export declare type ProductCsvImportSchemaColumnsArgs = {
    restrictCountryShipping?: Maybe<Scalars["Boolean"]>;
    columnIds?: Maybe<ReadonlyArray<ProductCsvImportColumnId>>;
};
export declare type ProductCsvImportSchemaRequiredColumnsArgs = {
    columnIds?: Maybe<ReadonlyArray<ProductCsvImportColumnId>>;
};
export declare type ProductCsvImportSchemaOptionalColumnsArgs = {
    restrictCountryShipping?: Maybe<Scalars["Boolean"]>;
    columnIds?: Maybe<ReadonlyArray<ProductCsvImportColumnId>>;
};
export declare type ProductCsvJobType = "ADD_PRODUCTS" | "CREATE_PRESALE_PRODUCT" | "EDIT_WISH_EXPRESS_COUNTRIES" | "SHOPIFY_CREATE_PRODUCTS" | "UPSERT_PRODUCTS" | "EDIT_FBW_SHIPPING" | "EDIT_SHIPPING" | "ADD_SIZE_COLOR" | "UPDATE_PRODUCTS";
export declare type ProductInteractionStats = {
    readonly __typename?: "ProductInteractionStats";
    readonly eventTime: Datetime;
    readonly impressions: Scalars["Int"];
    readonly clicks: Scalars["Int"];
    readonly gender?: Maybe<Gender>;
    readonly country?: Maybe<Country>;
};
export declare type ProductListingFeeDetailsSchema = {
    readonly __typename?: "ProductListingFeeDetailsSchema";
    readonly currentProductMax?: Maybe<Scalars["Int"]>;
    readonly snapshotDate: Datetime;
    readonly priceBreakdownPerTier?: Maybe<ReadonlyArray<ProductTierPriceSchema>>;
    readonly productMetrics?: Maybe<ProductListingPlanMonthlyProductMetrics>;
    readonly productMetricsBenchmark?: Maybe<ProductListingPlanMonthlyProductMetricsBenchmark>;
};
export declare type ProductListingPlanHub = {
    readonly __typename?: "ProductListingPlanHub";
    readonly bill: ProductListingFeeDetailsSchema;
    readonly productTotal: ReadonlyArray<ProductListingPlanProductMetrics>;
};
export declare type ProductListingPlanHubBillArgs = {
    date: DatetimeInput;
};
export declare type ProductListingPlanHubProductTotalArgs = {
    startDate: DatetimeInput;
    endDate: DatetimeInput;
};
export declare type ProductListingPlanMonthlyProductMetrics = {
    readonly __typename?: "ProductListingPlanMonthlyProductMetrics";
    readonly date: Datetime;
    readonly totalProductWithSale: Scalars["Int"];
    readonly totalProductWithImpression: Scalars["Int"];
    readonly totalProduct: Scalars["Int"];
    readonly merchantId: Scalars["ObjectIdType"];
};
export declare type ProductListingPlanMonthlyProductMetricsBenchmark = {
    readonly __typename?: "ProductListingPlanMonthlyProductMetricsBenchmark";
    readonly date: Datetime;
    readonly avgSaleRatio: Scalars["Float"];
    readonly avgImpressionRatio: Scalars["Float"];
};
export declare type ProductListingPlanProductMetrics = {
    readonly __typename?: "ProductListingPlanProductMetrics";
    readonly date: Datetime;
    readonly count?: Maybe<Scalars["Int"]>;
};
export declare type ProductListingPlanTier = "TIER_ONE" | "TIER_TWO" | "TIER_THREE";
export declare type ProductListingTierSchema = {
    readonly __typename?: "ProductListingTierSchema";
    readonly tier: ProductListingPlanTier;
    readonly lowerBound: Scalars["Int"];
    readonly higherBound: Scalars["Int"];
    readonly price: CurrencyValue;
};
export declare type ProductOrderStats = {
    readonly __typename?: "ProductOrderStats";
    readonly eventTime: Datetime;
    readonly orders: Scalars["Int"];
    readonly gmv: CurrencyValue;
    readonly merchantGmv?: Maybe<CurrencyValue>;
    readonly gender?: Maybe<Gender>;
    readonly country?: Maybe<Country>;
};
export declare type ProductPostErrorCode = "NO_ERROR" | "REQUEST_TOO_LARGE" | "INVALID_PRODUCT_ID" | "INVALID_MERCHANT_ID" | "LIMIT_IS_ZERO" | "INVALID_PRODUCT_VIDEO_ID" | "VIDEO_NOT_FOUND" | "INVALID_VIDEO" | "MISSING_PARAMETER" | "IDENTIFIER_ALREADY_IN_USE" | "INVALID_RULES" | "ILLEGAL_CHARACTER" | "CONFLICTING_PARAMETERS" | "INVALID_VIDEO_ID" | "INVALID_PARAMETER" | "RECORD_NOT_FOUND";
export declare type ProductPostsMutations = {
    readonly __typename?: "ProductPostsMutations";
    readonly add: AddProductPostMutation;
    readonly delete: DeleteProductPostsMutation;
};
export declare type ProductPostsMutationsAddArgs = {
    input: AddProductPostInput;
};
export declare type ProductPostsMutationsDeleteArgs = {
    input: DeleteProductPostsInput;
};
export declare type ProductPromotionDailyStats = {
    readonly __typename?: "ProductPromotionDailyStats";
    readonly date: Datetime;
    readonly impressions?: Maybe<Scalars["Int"]>;
    readonly sales?: Maybe<Scalars["Int"]>;
    readonly gmv?: Maybe<CurrencyValue>;
    readonly promotionBudget?: Maybe<CurrencyValue>;
    readonly promotionSpending?: Maybe<CurrencyValue>;
    readonly promotionStatus: ProductPromotionStatus;
};
export declare type ProductPromotionInput = {
    readonly productId: Scalars["ObjectIdType"];
    readonly budget: CurrencyInput;
    readonly intenseBoost?: Maybe<Scalars["Boolean"]>;
};
export declare type ProductPromotionLifetimeStats = {
    readonly __typename?: "ProductPromotionLifetimeStats";
    readonly sales: Scalars["Int"];
    readonly gmv: CurrencyValue;
    readonly spend: CurrencyValue;
};
export declare type ProductPromotionPeriodStats = {
    readonly __typename?: "ProductPromotionPeriodStats";
    readonly startDate: Datetime;
    readonly endDate: Datetime;
    readonly dailyStats: ReadonlyArray<ProductPromotionDailyStats>;
    readonly totalImpressions: Scalars["Int"];
    readonly totalSales: Scalars["Int"];
    readonly totalGmv: CurrencyValue;
    readonly totalPromotionSpending: CurrencyValue;
};
export declare type ProductPromotionRefundAssurance = {
    readonly __typename?: "ProductPromotionRefundAssurance";
    readonly topLevelStats: ProductPromotionRefundAssuranceStats;
    readonly monthlyStats: ReadonlyArray<ProductPromotionRefundAssuranceStats>;
};
export declare type ProductPromotionRefundAssuranceCreditReceivedStatus = "DONE" | "PENDING";
export declare type ProductPromotionRefundAssuranceStats = {
    readonly __typename?: "ProductPromotionRefundAssuranceStats";
    readonly spend?: Maybe<CurrencyValue>;
    readonly month?: Maybe<Datetime>;
    readonly advancedLogisticsGmv?: Maybe<CurrencyValue>;
    readonly refundAdvancedLogisticsGmv?: Maybe<CurrencyValue>;
    readonly creditIssued?: Maybe<CurrencyValue>;
    readonly creditIssuedStatus?: Maybe<ProductPromotionRefundAssuranceCreditReceivedStatus>;
    readonly refundRate?: Maybe<Scalars["Float"]>;
    readonly advancedLogisticsOrdersCount?: Maybe<Scalars["Int"]>;
    readonly refundedAdvancedLogisticsOrdersCount?: Maybe<Scalars["Int"]>;
};
export declare type ProductPromotionRefundAssuranceType = "ELIGIBLE" | "OTHER";
export declare type ProductPromotionSchema = {
    readonly __typename?: "ProductPromotionSchema";
    readonly productId: Scalars["ObjectIdType"];
    readonly product: ProductSchema;
    readonly promotionStatus: ProductPromotionStatus;
    readonly dailyPromotionBudget: CurrencyValue;
    readonly lastUpdateDate?: Maybe<Datetime>;
    readonly periodStats: ProductPromotionPeriodStats;
    readonly lifetimeStats: ProductPromotionLifetimeStats;
    readonly refundAssurance: ProductPromotionRefundAssurance;
    readonly intenseBoost?: Maybe<Scalars["Boolean"]>;
};
export declare type ProductPromotionSchemaPeriodStatsArgs = {
    startTime: DatetimeInput;
    endTime: DatetimeInput;
};
export declare type ProductPromotionSearchType = "ID" | "NAME" | "SKU";
export declare type ProductPromotionsInput = {
    readonly productBudgetInfo: ReadonlyArray<ProductPromotionInput>;
};
export declare type ProductPromotionStatus = "ACTIVE" | "OUT_OF_BALANCE" | "INACTIVE";
export declare type ProductSchema = {
    readonly __typename?: "ProductSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly sku?: Maybe<Scalars["String"]>;
    readonly name: Scalars["String"];
    readonly smallPictureUrl: Scalars["String"];
    readonly categories?: Maybe<ReadonlyArray<TrueTagSchema>>;
    readonly description: Scalars["String"];
    readonly enabled: Scalars["Boolean"];
    readonly variations: ReadonlyArray<VariationSchema>;
    readonly mainImage: ImageSchema;
    readonly extraImages?: Maybe<ReadonlyArray<ImageSchema>>;
    readonly shipping: ShippingSchema;
    readonly createTime: Datetime;
    readonly lastUpdateTime: Datetime;
    readonly sales: Scalars["Int"];
    readonly totalInventory: Scalars["Int"];
    readonly variationCount: Scalars["Int"];
    readonly merchantId: Scalars["ObjectIdType"];
    readonly tags: ReadonlyArray<Scalars["String"]>;
    readonly reviewStatus: CommerceProductReviewStatus;
    readonly wishes: Scalars["Int"];
    readonly isUnityBlacklisted: Scalars["Boolean"];
    readonly isUnityPendingStandardWarehouse: Scalars["Boolean"];
    readonly unityEffectiveDateStandardWarehouse?: Maybe<Datetime>;
    readonly isPromoted: Scalars["Boolean"];
    readonly requestedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly requestedBrand?: Maybe<BrandSchema>;
    readonly msrp?: Maybe<CurrencyValue>;
    readonly upc?: Maybe<Scalars["String"]>;
    readonly shippingProfile?: Maybe<ShippingProfileSchema>;
    readonly totalGmv: CurrencyValue;
    readonly demoVideo?: Maybe<ProductVideo>;
    readonly isRemovedByWish: Scalars["Boolean"];
    readonly isRemovedByMerchant: Scalars["Boolean"];
    readonly isRemoved: Scalars["Boolean"];
    readonly isEuCompliant: Scalars["Boolean"];
    readonly stats: ProductStats;
    readonly analyticsService: ProductAnalyticsSchema;
    readonly condition?: Maybe<CommerceProductCondition>;
    readonly trueTags?: Maybe<ReadonlyArray<TrueTagSchema>>;
    readonly eligibleForCategoryDispute?: Maybe<ProductCategoryDisputeEligibility>;
    readonly referenceWeight?: Maybe<Weight>;
    readonly referenceLength?: Maybe<Length>;
    readonly referenceVolume?: Maybe<Volume>;
    readonly referenceArea?: Maybe<Area>;
    readonly referenceUnit?: Maybe<Count>;
    readonly countryBlocks?: Maybe<ReadonlyArray<ProductCountryBlockSchema>>;
    readonly maxQuantity?: Maybe<Scalars["Int"]>;
    readonly attributes?: Maybe<ReadonlyArray<ProductAttributeSchema>>;
};
export declare type ProductSchemaShippingArgs = {
    warehouseId?: Maybe<Scalars["String"]>;
};
export declare type ProductSchemaDemoVideoArgs = {
    useGroupings?: Maybe<Scalars["Boolean"]>;
};
export declare type ProductSearchType = "ID" | "NAME" | "SKU";
export declare type ProductSort = {
    readonly field: ProductSortField;
    readonly order: SortOrderType;
};
export declare type ProductSortField = "ID" | "SALES" | "SKU" | "LAST_UPDATE";
export declare type ProductStats = {
    readonly __typename?: "ProductStats";
    readonly totals: ProductTotalStats;
    readonly daily: ReadonlyArray<ProductTotalStats>;
};
export declare type ProductStatsTotalsArgs = {
    days: Scalars["Int"];
    coreMetricsOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type ProductStatsDailyArgs = {
    days: Scalars["Int"];
    coreMetricsOnly?: Maybe<Scalars["Boolean"]>;
};
export declare type ProductTierPriceSchema = {
    readonly __typename?: "ProductTierPriceSchema";
    readonly tier: ProductListingPlanTier;
    readonly productCount: Scalars["Int"];
    readonly price: CurrencyValue;
};
export declare type ProductTotalStats = {
    readonly __typename?: "ProductTotalStats";
    readonly gmv: CurrencyValue;
    readonly orders: Scalars["Int"];
    readonly impressions: Scalars["BigInt"];
    readonly startDate: Datetime;
    readonly endDate: Datetime;
};
export declare type ProductUpsertInput = {
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly name?: Maybe<Scalars["String"]>;
    readonly description?: Maybe<Scalars["String"]>;
    readonly variations?: Maybe<ReadonlyArray<VariationInput>>;
    readonly images?: Maybe<ReadonlyArray<ImageInput>>;
    readonly defaultShipping?: Maybe<ReadonlyArray<DefaultShippingInput>>;
    readonly domesticShipping?: Maybe<ReadonlyArray<DomesticShippingInput>>;
    readonly sku?: Maybe<Scalars["String"]>;
    readonly upc?: Maybe<Scalars["String"]>;
    readonly requestedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly tags?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly warehouseId?: Maybe<Scalars["ObjectIdType"]>;
    readonly countryShipping?: Maybe<ReadonlyArray<WarehouseCountryShippingInput>>;
    readonly msrp?: Maybe<CurrencyInput>;
    readonly shippingProfileId?: Maybe<Scalars["ObjectIdType"]>;
    readonly shippingProfile?: Maybe<ShippingProfileUpsertInput>;
    readonly demoVideoSourceUrl?: Maybe<Scalars["String"]>;
    readonly condition?: Maybe<CommerceProductCondition>;
    readonly referenceWeight?: Maybe<WeightInput>;
    readonly referenceLength?: Maybe<LengthInput>;
    readonly referenceVolume?: Maybe<VolumeInput>;
    readonly referenceArea?: Maybe<AreaInput>;
    readonly referenceUnit?: Maybe<CountInput>;
    readonly maxQuantity?: Maybe<Scalars["Int"]>;
    readonly attributes?: Maybe<ReadonlyArray<AttributeInput>>;
};
export declare type ProductVideo = {
    readonly __typename?: "ProductVideo";
    readonly id: Scalars["ObjectIdType"];
    readonly merchantId: Scalars["ObjectIdType"];
    readonly productId: Scalars["ObjectIdType"];
    readonly lowQuality?: Maybe<RaccVideoAsset>;
    readonly mediumQuality?: Maybe<RaccVideoAsset>;
    readonly highQuality?: Maybe<RaccVideoAsset>;
    readonly preview?: Maybe<RaccVideoAsset>;
    readonly uploadTime: Datetime;
    readonly source: RaccVideoAsset;
    readonly state: ProductVideoState;
    readonly rejectionReason?: Maybe<Scalars["String"]>;
    readonly viewCount?: Maybe<Scalars["Int"]>;
};
export declare type ProductVideoContentReviewTraits = {
    readonly rotationIsIncorrect?: Maybe<Scalars["Boolean"]>;
    readonly isBlank?: Maybe<Scalars["Boolean"]>;
    readonly isImageSlideshow?: Maybe<Scalars["Boolean"]>;
    readonly isBlurry?: Maybe<Scalars["Boolean"]>;
    readonly isScreenRecording?: Maybe<Scalars["Boolean"]>;
    readonly hasEngravedText?: Maybe<Scalars["Boolean"]>;
    readonly hasHatefulSymbol?: Maybe<Scalars["Boolean"]>;
    readonly hasPartialNudity?: Maybe<Scalars["Boolean"]>;
    readonly hasEngravedNonEnglishText?: Maybe<Scalars["Boolean"]>;
    readonly hasObsceneGraphicContent?: Maybe<Scalars["Boolean"]>;
    readonly hasNudity?: Maybe<Scalars["Boolean"]>;
    readonly hasPersonTalking?: Maybe<Scalars["Boolean"]>;
    readonly hasMerchantBranding?: Maybe<Scalars["Boolean"]>;
    readonly hasMale?: Maybe<Scalars["Boolean"]>;
    readonly hasFemale?: Maybe<Scalars["Boolean"]>;
    readonly hasMinor?: Maybe<Scalars["Boolean"]>;
    readonly refersConsumerOffPlatform?: Maybe<Scalars["Boolean"]>;
    readonly containsMoreThanOneProduct?: Maybe<Scalars["Boolean"]>;
    readonly isFactoryVideo?: Maybe<Scalars["Boolean"]>;
};
export declare type ProductVideoContentTagMutations = {
    readonly __typename?: "ProductVideoContentTagMutations";
    readonly submitProductVideoContentReview?: Maybe<SubmitProductVideoContentReview>;
    readonly submitProductVideoContentManualReview?: Maybe<SubmitProductVideoContentManualReview>;
};
export declare type ProductVideoContentTagMutationsSubmitProductVideoContentReviewArgs = {
    input: SubmitProductVideoContentReviewInput;
};
export declare type ProductVideoContentTagMutationsSubmitProductVideoContentManualReviewArgs = {
    input: SubmitProductVideoContentManualReviewInput;
};
export declare type ProductVideoIpTagMutations = {
    readonly __typename?: "ProductVideoIPTagMutations";
    readonly submitProductVideoIpReview?: Maybe<SubmitProductVideoIpReview>;
    readonly submitProductVideoIpManualReview?: Maybe<SubmitProductVideoIpManualReview>;
};
export declare type ProductVideoIpTagMutationsSubmitProductVideoIpReviewArgs = {
    input: SubmitProductVideoIpReviewInput;
};
export declare type ProductVideoIpTagMutationsSubmitProductVideoIpManualReviewArgs = {
    input: SubmitProductVideoIpManualReviewInput;
};
export declare type ProductVideoIpViolationReason = "UNLICENSED_MEDIA" | "BLURRED_INFORMATION" | "COPYRIGHT_IMAGES" | "UNKNOWN" | "COMMERCIAL" | "EMBEDDED_LOGO" | "PICTURED_WITH_MAJOR_BRAND" | "COUNTERFEIT_OR_IP_VIOLATION";
export declare type ProductVideoState = "UNKNOWN_STATE" | "PENDING_TRANSCODE" | "PENDING_REVIEW" | "APPROVED" | "REJECTED" | "FAILED_TRANSCODE" | "PENDING_AUTO_REVIEW" | "FAILED_AUTO_REVIEW" | "FAILED_OBJECT_DETECTION" | "PENDING_REKOGNITION" | "FAILED_REKOGNITION";
export declare type ProductVideoTaggerJobSchema = {
    readonly __typename?: "ProductVideoTaggerJobSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly source: ProductVideoTaggerJobSource;
    readonly product?: Maybe<ProductSchema>;
};
export declare type ProductVideoTaggerJobSource = "NOT_CAPTURED" | "USER_REPORT" | "MERCHANT_UPLOAD" | "MANUAL_REVIEW";
export declare type PromotableProduct = {
    readonly __typename?: "PromotableProduct";
    readonly product: ProductSchema;
    readonly isInTrendingCategory: Scalars["Boolean"];
};
export declare type RaccVideoAsset = {
    readonly __typename?: "RaccVideoAsset";
    readonly url: Scalars["String"];
    readonly contentType: Scalars["String"];
};
export declare type RedirectLinkType = "PAYMENT_ORDER_DETAIL_MODULE" | "ONEOFF_PAYMENT_DETAIL_PAGE" | "FINE_DETAIL_PAGE";
export declare type RefundAmountType = "PRICE" | "SHIPPING" | "GENERAL";
export declare type RefundAssuranceConstants = {
    readonly __typename?: "RefundAssuranceConstants";
    readonly enabled: Scalars["Boolean"];
    readonly spendDiscountFactor: Scalars["Float"];
    readonly guaranteedRefundRate: Scalars["Float"];
};
export declare type RefundDisputeHub = {
    readonly __typename?: "RefundDisputeHub";
    readonly disputeCount?: Maybe<Scalars["Int"]>;
    readonly disputes?: Maybe<ReadonlyArray<RefundDisputeSchema>>;
};
export declare type RefundDisputeHubDisputeCountArgs = {
    states: ReadonlyArray<DisputeState>;
    reasons?: Maybe<ReadonlyArray<DisputeReason>>;
    searchType?: Maybe<RefundDisputeSearchType>;
    query?: Maybe<Scalars["String"]>;
};
export declare type RefundDisputeHubDisputesArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    states: ReadonlyArray<DisputeState>;
    reasons?: Maybe<ReadonlyArray<DisputeReason>>;
    searchType?: Maybe<RefundDisputeSearchType>;
    query?: Maybe<Scalars["String"]>;
    sort?: Maybe<DisputeSort>;
};
export declare type RefundDisputeSchema = {
    readonly __typename?: "RefundDisputeSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly orderId: Scalars["ObjectIdType"];
    readonly consumerId: Scalars["ObjectIdType"];
    readonly disputeAmount: CurrencyValue;
    readonly isReturnDispute: Scalars["Boolean"];
    readonly reason: DisputeReasonSchema;
    readonly merchant: MerchantSchema;
    readonly state: DisputeState;
    readonly lastUpdate: Datetime;
    readonly productId: Scalars["ObjectIdType"];
};
export declare type RefundDisputeSearchType = "ORDER_ID";
export declare type RefundError = {
    readonly __typename?: "RefundError";
    readonly orderId: Scalars["ObjectIdType"];
    readonly message: Scalars["String"];
};
export declare type RefundOrderInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly reasonCategory: RefundReasonCategory;
    readonly buyerFraudReasonCategory?: Maybe<BuyerFraudReasonCategory>;
    readonly reasonNote?: Maybe<Scalars["String"]>;
    readonly source?: Maybe<RefundSource>;
    readonly ticketId?: Maybe<Scalars["ObjectIdType"]>;
    readonly brandName?: Maybe<Scalars["String"]>;
    readonly partialQuantity?: Maybe<Scalars["Int"]>;
    readonly expectedRefunds?: Maybe<Scalars["Int"]>;
    readonly shouldRefundToCash?: Maybe<Scalars["Boolean"]>;
    readonly partialRefundAmount?: Maybe<Scalars["Float"]>;
    readonly partialAmountRefundType?: Maybe<RefundAmountType>;
    readonly partialAmountNote?: Maybe<Scalars["String"]>;
};
export declare type RefundOrders = {
    readonly __typename?: "RefundOrders";
    readonly refundedCount: Scalars["Int"];
    readonly errorMessages?: Maybe<ReadonlyArray<RefundError>>;
};
export declare type RefundReasonCategory = "FBW_FAILED_TO_FULFILL_DUE_TO_CARRIER_RETURN" | "ITEM_DAMAGED" | "EPC_OVERWEIGHT" | "COMMERCEHUB_SUPPLIER_DETECTED_FRAUD" | "DOES_NOT_FIT_USERS_FAULT" | "CS_REFUND_FOR_USER_CANCEL" | "DECLINED_GIFT" | "INVALID_ADDRESS" | "ORDER_ROUTING" | "BLUE_PROGRAM_DEPRECATION" | "BLUE_FUSION_STORE_NOT_SCAN_IN" | "ITEM_NEVER_ARRIVED" | "INSUFFICIENT_INVENTORY" | "ITEM_IS_DANGEROUS" | "POOR_QUALITY" | "MERCHANT_SENT_TO_WRONG_ADDRESS" | "CONTENT_POLICY_VIOLATION_CANCELLATION" | "ITEM_DOES_NOT_MATCH_LISTING" | "NOT_QUALIFIED_SHIPPING_PROVIDER" | "BLUE_FUSION_IN_TRANSIT_LOST" | "UNABLE_TO_SHIP" | "COMMERCEHUB_BAD_ADDRESS" | "PRODUCT_MALFUNCTION" | "COMMERCEHUB_BAD_SKU" | "DOES_FIT_WRONG_SIZE" | "WISHBLUE_EPC_LATE_FULFILLMENT" | "ONEOFF_WISH_ERROR" | "FBS_STORE_QUIT" | "SUSPECTED_FRAUD" | "REPLACEMENT_NEVER_RECEIVED" | "CB_USER_CANCELLED_ORDER" | "STORE_SENT_THE_WRONG_SIZE" | "RECEIVED_NOTE_FROM_MERCHANT" | "BLUE_FUSION_SENT_TO_WRONG_STORE" | "INCOMPLETE_ORDER" | "ITEM_HELD_AT_CUSTOMS" | "USER_ENTERED_INVALID_ADDRESS" | "CONSUMER_FRAUD" | "ITEM_IS_DAMAGED" | "LATE_OR_MISSING" | "MERCHANT_REPORTED_BUYER_FRAUD" | "MISLEADING_LISTING" | "BLUE_STORE_QUIT" | "ITEM_DID_NOT_MEET_EXPECTATIONS" | "ITEM_DOES_NOT_WORK_AS_DESCRIBED" | "PRODUCT_LISTING_MISSING_INFO" | "IN_GRACE_PERIOD_DELAY_CANCEL" | "USER_NO_LONGER_WANTS_ITEM" | "SHOPIFY_MERCHANT_CANCELLED" | "EPC_LAST_MILE_CARRIERS_UNABLE_TO_SHIP" | "EPC_OVERSIZE" | "INCORRECT_QUANTITY_OF_ITEMS" | "ITEM_DOES_NOT_FIT" | "EXPIRED_GIFT" | "SHIPPING_TAKING_TOO_LONG" | "MERCHANT_OUT_OF_STOCK" | "FBW_WAREHOUSE_FAILED_TO_FULFILL" | "CUSTOMER_REQUEST" | "FAKE_OR_COUNTERFEIT" | "DOES_NOT_FIT" | "PRICE_MATCH" | "EPC_OVERVALUE" | "WRONG_ITEM" | "BLUE_STORE_OUT_OF_STOCK" | "COMMERCEHUB_OTHER" | "ORDER_PLACED_BY_TECHNICAL_ERROR" | "DOES_NOT_FIT_INCORRECT_SIZE" | "BLUE_FUSION_STORE_LOST" | "MERCHANT_FAILED_TO_FULFILL" | "ITEM_RETURNED_TO_SENDER" | "COMMERCEHUB_CANCELLED_AT_MERCHANTS_REQUEST" | "WRONG_COLOR" | "USER_CANCEL_CHANGE_PAYMENT" | "CONFIRMED_FUSION_ITEM_NOT_PICKED_UP" | "CIRCULAR_ROUTED_UNFULFILLED" | "CUSTOMER_MANUFACTURER_COMPLAINT" | "USER_CANCELLED_ORDER" | "STORE_UPLOADED_INVENTORY_RETURN" | "RIGHT_OF_WITHDRAWAL" | "DOES_NOT_FIT_WRONG_SIZE" | "EMPTY_PACKAGE" | "MISSING_ITEM_OR_PARTS" | "PRESALE_TIMELINE_CLOSED" | "COMMERCEHUB_OUT_OF_STOCK" | "FRAUDULENT_ACTIVITY" | "RECEIVED_WRONG_ITEM" | "BLUE_ADMIN_REFUND" | "ITEM_MARKED_DELIVERED_BUT_DID_NOT_ARRIVE" | "ITEM_IS_COUNTERFEIT" | "USER_PLACED_ORDER_BY_MISTAKE" | "PREORDER_NOT_FULFILLED" | "OTHER" | "ITEM_IS_POOR_QUALITY" | "LIMBO_ORDER_UNFULFILLED" | "CLEARING_LIMBO" | "BLUE_DELIVERY_NOT_DELIVERED" | "EXPIRED_GROUP_BUY" | "USER_ENTERED_WRONG_ADDRESS" | "ITEM_MARKED_DELIVERED_NOT_ALL_ITEMS_ARRIVED" | "PICKUP_NOW_ITEM_NOT_PICKED_UP";
export declare type RefundSource = "MERCHANT" | "WISH" | "USER" | "PAYMENT_PROVIDER";
export declare type Region = {
    readonly __typename?: "Region";
    readonly code: Scalars["String"];
    readonly name: Scalars["String"];
    readonly country: Country;
};
export declare type RegionShippingInput = {
    readonly regionCode: Scalars["String"];
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly price?: Maybe<CurrencyInput>;
    readonly timeToDoor?: Maybe<Scalars["Int"]>;
};
export declare type RegionShippingSchema = {
    readonly __typename?: "RegionShippingSchema";
    readonly region: Region;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly price?: Maybe<CurrencyValue>;
    readonly timeToDoor?: Maybe<Scalars["Int"]>;
};
export declare type RegulatorAction = "UPSERT";
export declare type RegulatorReportAction = "CREATE";
export declare type RegulatorReportReason = "DANGEROUS_OR_UNSAFE" | "OTHER_NON_COMPLIANCE" | "HAZARDOUS" | "POLICY_VIOLATION";
export declare type RegulatorSchema = {
    readonly __typename?: "RegulatorSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly country: Country;
    readonly organization: Scalars["String"];
    readonly website: Scalars["String"];
    readonly name: Scalars["String"];
    readonly emailAddress: Scalars["String"];
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly title?: Maybe<Scalars["String"]>;
};
export declare type RejectTrademarkInput = {
    readonly id: Scalars["ObjectIdType"];
    readonly rejectionReason?: Maybe<Scalars["String"]>;
};
export declare type RejectTrademarksAndBrandInfo = {
    readonly __typename?: "RejectTrademarksAndBrandInfo";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type RejectTrademarksAndBrandInfoInput = {
    readonly brandInfoId: Scalars["ObjectIdType"];
    readonly trademarks: ReadonlyArray<RejectTrademarkInput>;
    readonly brandInfoRejectionReason?: Maybe<Scalars["String"]>;
};
export declare type ReleasePayoutRequest = {
    readonly __typename?: "ReleasePayoutRequest";
    readonly releasePaymentRequestId?: Maybe<Scalars["String"]>;
    readonly canResetPayout?: Maybe<Scalars["Boolean"]>;
};
export declare type RemoveFromPlus = {
    readonly __typename?: "RemoveFromPlus";
    readonly ok?: Maybe<Scalars["Boolean"]>;
};
export declare type RemoveProduct = {
    readonly __typename?: "RemoveProduct";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type RemoveProductInput = {
    readonly productId: Scalars["ObjectIdType"];
};
export declare type RemoveShippingProfile = {
    readonly __typename?: "RemoveShippingProfile";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ReportAbuseHub = {
    readonly __typename?: "ReportAbuseHub";
    readonly regulator?: Maybe<RegulatorSchema>;
    readonly regulatorReportReasons?: Maybe<ReadonlyArray<RegulatorReportReason>>;
};
export declare type ReportAbuseHubRegulatorArgs = {
    emailAddress: Scalars["String"];
};
export declare type ReportAbuseMutations = {
    readonly __typename?: "ReportAbuseMutations";
    readonly upsertRegulatorReport?: Maybe<UpsertRegulatorReport>;
    readonly upsertRegulator?: Maybe<UpsertRegulator>;
};
export declare type ReportAbuseMutationsUpsertRegulatorReportArgs = {
    input?: Maybe<UpsertRegulatorReportInput>;
};
export declare type ReportAbuseMutationsUpsertRegulatorArgs = {
    input?: Maybe<UpsertRegulatorInput>;
};
export declare type ResetPasswordMutation = {
    readonly __typename?: "ResetPasswordMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly ok: Scalars["Boolean"];
};
export declare type ResetPasswordMutationInput = {
    readonly rawPassword: Scalars["String"];
    readonly comparePassword: Scalars["String"];
    readonly username: Scalars["String"];
    readonly token: Scalars["String"];
};
export declare type ResetReleasePaymentRequestInput = {
    readonly requestId: Scalars["ObjectIdType"];
};
export declare type ResetReleasePaymentRequestMutation = {
    readonly __typename?: "ResetReleasePaymentRequestMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ResponsiblePersonAction = "CREATE" | "REJECT" | "APPROVE" | "UPDATE" | "DELETE";
export declare type ResponsiblePersonAddressSchema = {
    readonly __typename?: "ResponsiblePersonAddressSchema";
    readonly name: Scalars["String"];
    readonly streetAddress1: Scalars["String"];
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly zipcode?: Maybe<Scalars["String"]>;
    readonly countryCode: EuComplianceResponsiblePersonCountriesAndRegionsCode;
    readonly state?: Maybe<Scalars["String"]>;
    readonly county?: Maybe<Scalars["String"]>;
    readonly country: EuComplianceResponsiblePersonCountriesAndRegions;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
};
export declare type ResponsiblePersonCompliance = "EU_REGULATION_20191020_MSR";
export declare type ResponsiblePersonFieldType = "RISK_SCORE";
export declare type ResponsiblePersonRejectionReason = "INVALID_NAME" | "INVALID_ADDRESS" | "INVALID_PHONE_AND_EMAIL";
export declare type ResponsiblePersonRejectReasonSchema = {
    readonly __typename?: "ResponsiblePersonRejectReasonSchema";
    readonly reason: ResponsiblePersonRejectionReason;
    readonly text: Scalars["String"];
};
export declare type ResponsiblePersonSchema = {
    readonly __typename?: "ResponsiblePersonSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly merchantId: Scalars["ObjectIdType"];
    readonly merchant: MerchantSchema;
    readonly address?: Maybe<ResponsiblePersonAddressSchema>;
    readonly email: Scalars["String"];
    readonly status?: Maybe<ResponsiblePersonStatus>;
    readonly rejectReason?: Maybe<ResponsiblePersonRejectionReason>;
    readonly compliance?: Maybe<ResponsiblePersonCompliance>;
};
export declare type ResponsiblePersonSort = {
    readonly field: ResponsiblePersonFieldType;
    readonly order: SortOrderType;
};
export declare type ResponsiblePersonStatus = "DELETED" | "ADMIN_APPROVED" | "COMPLETE" | "REJECTED" | "INREVIEW";
export declare type ResponsiblePersonUpsertInput = {
    readonly action: ResponsiblePersonAction;
    readonly responsiblePersonId?: Maybe<Scalars["ObjectIdType"]>;
    readonly address?: Maybe<EuComplianceAddressInput>;
    readonly email?: Maybe<Scalars["String"]>;
    readonly rejectReason?: Maybe<ResponsiblePersonRejectionReason>;
    readonly compliance: ResponsiblePersonCompliance;
};
export declare type RestrictedProductCategory = "UNVERIFIED_WARRANTIES" | "VITAMINS_AND_SUPPLEMENTS" | "FOOD" | "PLANT_AND_PLANT_SEEDS" | "CHILD_HARNESS" | "BEVERAGES" | "PET_FOOD" | "OTC_MEDICATION" | "CHILD_CARSEAT" | "SEATBELTS";
export declare type RestrictedProductCountryCode = "BE" | "FR" | "BG" | "CO" | "DK" | "HR" | "TR" | "CA" | "DE" | "JP" | "IT" | "HU" | "CZ" | "AR" | "AU" | "GB" | "BR" | "FI" | "KR" | "IE" | "ES" | "GR" | "SK" | "NL" | "PT" | "MT" | "CH" | "SI" | "US" | "LV" | "EE" | "LT" | "LU" | "SE" | "RO" | "UA" | "MX" | "PL" | "AT";
export declare type RestrictedProductMutations = {
    readonly __typename?: "RestrictedProductMutations";
    readonly upsertRestrictedProductRequest?: Maybe<UpsertRestrictedProductRequest>;
};
export declare type RestrictedProductMutationsUpsertRestrictedProductRequestArgs = {
    input?: Maybe<RestrictedProductRequestUpsertInput>;
};
export declare type RestrictedProductRegion = {
    readonly __typename?: "RestrictedProductRegion";
    readonly regionName: Scalars["String"];
    readonly regionCode: RestrictedProductRegionCode;
    readonly isACountry: Scalars["Boolean"];
};
export declare type RestrictedProductRegionCode = "LA" | "NA" | "TR" | "JP" | "KR" | "AU" | "EU";
export declare type RestrictedProductRegionToCategory = {
    readonly __typename?: "RestrictedProductRegionToCategory";
    readonly regionCode: RestrictedProductRegionCode;
    readonly categories: ReadonlyArray<RestrictedProductCategory>;
};
export declare type RestrictedProductRequestAction = "CREATE" | "BATCH_APPROVE" | "APPROVE" | "BATCH_REJECT" | "REJECT";
export declare type RestrictedProductRequestFieldType = "merchantId" | "formattedCreateTime";
export declare type RestrictedProductRequestSchema = {
    readonly __typename?: "RestrictedProductRequestSchema";
    readonly merchant?: Maybe<MerchantSchema>;
    readonly id: Scalars["ObjectIdType"];
    readonly merchantId: Scalars["ObjectIdType"];
    readonly state: RestrictedProductRequestState;
    readonly region: RestrictedProductRegion;
    readonly productCategory: RestrictedProductCategory;
    readonly rejectedReason?: Maybe<Scalars["String"]>;
    readonly ipAddress?: Maybe<Scalars["String"]>;
    readonly ipAddressCountry?: Maybe<Country>;
    readonly decisionDate?: Maybe<Datetime>;
    readonly decisionAdminId?: Maybe<Scalars["ObjectIdType"]>;
    readonly requestDate?: Maybe<Datetime>;
    readonly evidenceIds?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly businessEntityName?: Maybe<Scalars["String"]>;
    readonly legalRepName?: Maybe<Scalars["String"]>;
    readonly legalRepTitle?: Maybe<Scalars["String"]>;
    readonly merchantWarrantyDoc?: Maybe<MerchantFileSchema>;
    readonly licenseExpiryDate?: Maybe<Datetime>;
};
export declare type RestrictedProductRequestSort = {
    readonly field: RestrictedProductRequestFieldType;
    readonly order: SortOrderType;
};
export declare type RestrictedProductRequestState = "AWAITING_ADMIN" | "AWAITING_MERCHANT" | "APPROVED" | "REJECTED";
export declare type RestrictedProductRequestUpsertInput = {
    readonly action: RestrictedProductRequestAction;
    readonly categories?: Maybe<ReadonlyArray<RestrictedProductCategory>>;
    readonly region?: Maybe<RestrictedProductRegionCode>;
    readonly legalRepName?: Maybe<Scalars["String"]>;
    readonly legalRepTitle?: Maybe<Scalars["String"]>;
    readonly businessEntityName?: Maybe<Scalars["String"]>;
    readonly warrantyFileUrl?: Maybe<Scalars["String"]>;
    readonly warrantyFilename?: Maybe<Scalars["String"]>;
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly ids?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly rejectedReason?: Maybe<Scalars["String"]>;
};
export declare type RestrictedProductSchema = {
    readonly __typename?: "RestrictedProductSchema";
    readonly restrictedProductRequestsCount?: Maybe<Scalars["Int"]>;
    readonly restrictedProductRequests?: Maybe<ReadonlyArray<RestrictedProductRequestSchema>>;
    readonly restrictedProductCategories?: Maybe<ReadonlyArray<RestrictedProductCategory>>;
    readonly restrictedProductCountryCodes?: Maybe<ReadonlyArray<RestrictedProductCountryCode>>;
    readonly restrictedProductEuropeCountries?: Maybe<ReadonlyArray<Country>>;
    readonly allRegionRestrictedProductCategories?: Maybe<ReadonlyArray<RestrictedProductRegionToCategory>>;
    readonly restrictedProductRegions?: Maybe<ReadonlyArray<RestrictedProductRegion>>;
    readonly allRestrictedProductCategories?: Maybe<ReadonlyArray<RestrictedProductCategory>>;
};
export declare type RestrictedProductSchemaRestrictedProductRequestsCountArgs = {
    states?: Maybe<ReadonlyArray<RestrictedProductRequestState>>;
    categories?: Maybe<ReadonlyArray<RestrictedProductCategory>>;
    regions?: Maybe<ReadonlyArray<RestrictedProductRegionCode>>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type RestrictedProductSchemaRestrictedProductRequestsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    states?: Maybe<ReadonlyArray<RestrictedProductRequestState>>;
    categories?: Maybe<ReadonlyArray<RestrictedProductCategory>>;
    regions?: Maybe<ReadonlyArray<RestrictedProductRegionCode>>;
    sort?: Maybe<RestrictedProductRequestSort>;
    merchantId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type RestrictedProductSchemaRestrictedProductCategoriesArgs = {
    region: RestrictedProductRegionCode;
};
export declare type RevShareInfoSchema = {
    readonly __typename?: "RevShareInfoSchema";
    readonly sourceRegion?: Maybe<RevShareRegion>;
    readonly destRegion?: Maybe<RevShareRegion>;
    readonly entityRegion?: Maybe<RevShareRegion>;
    readonly productCategory?: Maybe<OrderRevShareProductCategory>;
    readonly qualifiers: ReadonlyArray<RevShareQualifier>;
    readonly isRevShareFromMerchant?: Maybe<Scalars["Boolean"]>;
};
export declare type RevShareQualifier = "ENTITY_EU" | "CATEGORY_SEX_TOY" | "ENTITY_NA" | "SOURCE_NA" | "DEST_EU" | "IS_WISH_EXPRESS" | "DEST_NA" | "CATEGORY_HOUSEHOLD" | "SOURCE_EU";
export declare type RevShareRegion = "EU" | "NA" | "OTHER";
export declare type RoleSchema = {
    readonly __typename?: "RoleSchema";
    readonly id: RoleType;
    readonly name: Scalars["String"];
    readonly description?: Maybe<Scalars["String"]>;
};
export declare type RoleType = "BD" | "WISH_BLUE_OPERATOR" | "LEGAL_TEAM" | "ALORICA_WORKER" | "USER" | "ACCENTURE_DETAIL_LEAD" | "FACTORY_ACCOUNT_MANAGER" | "MERCHANT_LEAD" | "LOGISTICS_TRACKING_ADMIN" | "TASKUS_TAGGER_LEAD" | "BOOST_DASHBOARD" | "WISHCHAIN" | "WAREHOUSE" | "TASKUS_CS_LEAD" | "ACCENTURE_TAGGER_WORKER" | "BRAND_PROTECTION_WORKER" | "TRUSTED_TAGGER" | "BRAND_PROTECTION_LEAD" | "TASKUS_DETAIL_LEAD" | "REQUEST_INFO_USER" | "TASKUS_MC_WORKER" | "MERCHANT_SUPPORT_LEAD" | "CS_REP_INTERNAL" | "INSURANCE_PROVIDER" | "FINANCE" | "COURIER" | "SHIP_PROVIDER" | "TEST_USER" | "TRANSCOSMOS_LEAD" | "TAGGER_LEAD" | "CS_ADMIN" | "FRAUD_TEAM_LEAD" | "IN_HOUSE_TAGGER" | "SUPPLY_CHAIN" | "SALES_REP" | "STORE_USER" | "SHIP_TO_STORE_PARTNER" | "CS_REP_EXTERNAL" | "FRAUD_TEAM" | "ACCENTURE_TAGGER_LEAD" | "TASKUS_TAGGER_WORKER" | "ACCENTURE_FRAUD_LEAD" | "ZENDESK_SUPPORT" | "SUB_USER" | "TELEPERFORMANCE_BOGOTA_WORKER" | "ADMIN" | "DEP_IT_ADMIN" | "TASKUS_DETAIL_WORKER" | "FACTORY" | "WAREHOUSE_OPERATOR" | "TELEPERFORMANCE_WORKER" | "BD_LEAD" | "META_USER" | "TAGGER" | "LOAN_PROVIDER" | "TRUST_SAFETY" | "ALORICA_LEAD" | "WISH_BLUE_AMBASSADOR" | "LEGAL_TEAM_LEAD" | "ACCENTURE_DETAIL_WORKER" | "OUTSOURCED_MERCHANT_SUPPORT" | "TASKUS_MC_LEAD" | "PAYMENT_PROVIDER" | "MERCHANT_SUPPORT" | "ACCENTURE_WORKER" | "DEP_PRODUCT_API_USER" | "TRANSCOSMOS_WORKER" | "ACCENTURE_FRAUD_WORKER" | "CS_REP_INTERNAL_LEAD" | "QA" | "ACCESS_CONTROL_MANAGER" | "WISH_HR" | "EPC_SUPPORT" | "PENDING_USER" | "TELEPERFORMANCE_BOGOTA_LEAD" | "PARTNER" | "WISHPOST" | "TELEPERFORMANCE_LEAD" | "BRAND_PARTNER" | "WISH_EXPRESS_SUPPORT" | "TASKUS_CS_WORKER";
export declare type RootMutation = {
    readonly __typename?: "RootMutation";
    readonly currentUser?: Maybe<UserMutation>;
    readonly currentMerchant?: Maybe<MerchantMutation>;
    readonly payments?: Maybe<MerchantPaymentsMutation>;
    readonly oneoffPayments?: Maybe<MerchantOneoffPaymentMutations>;
    readonly fulfillment: FulfillmentMutation;
    readonly productCatalog: ProductCatalogMutations;
    readonly shippingProfileCollection: ShippingProfileMutations;
    readonly logistics?: Maybe<LogisticsMutations>;
    readonly plus?: Maybe<PlusAdminServiceMutations>;
    readonly analytics?: Maybe<AnalyticsServiceMutations>;
    readonly marketing?: Maybe<MarketingServiceMutations>;
    readonly policy?: Maybe<PolicyMutations>;
    readonly policyPublic: PolicyPublicMutations;
    readonly authentication?: Maybe<AuthenticationMutations>;
    readonly uploads?: Maybe<UploadMutations>;
    readonly webhook?: Maybe<WebhookMutations>;
    readonly brandPartner?: Maybe<BrandPartnerMutations>;
    readonly identity?: Maybe<IdentityMutations>;
    readonly tagging?: Maybe<TaggingMutations>;
    readonly video?: Maybe<VideoMutations>;
    readonly gating?: Maybe<MerchantUserGateMutations>;
    readonly mfp?: Maybe<MfpServiceMutations>;
};
export declare type RootQuery = {
    readonly __typename?: "RootQuery";
    readonly currentUser?: Maybe<UserSchema>;
    readonly currentMerchant?: Maybe<MerchantSchema>;
    readonly su?: Maybe<UserSchema>;
    readonly productCatalog?: Maybe<ProductCatalogSchema>;
    readonly shippingProfileCollection?: Maybe<ShippingProfileCollectionSchema>;
    readonly fulfillment?: Maybe<FulfillmentSchema>;
    readonly brand?: Maybe<BrandServiceSchema>;
    readonly platformConstants?: Maybe<PlatformConstants>;
    readonly merchantTermsOfService: MerchantTermsOfServiceSchema;
    readonly tos: TosServiceSchema;
    readonly merchants?: Maybe<MerchantServiceSchema>;
    readonly authentication: AuthenticationServiceSchema;
    readonly announcements: AnnouncementsService;
    readonly marketing?: Maybe<MarketingServiceSchema>;
    readonly logistics?: Maybe<LogisticsSchema>;
    readonly policyPublic?: Maybe<PolicyPublicSchema>;
    readonly payments?: Maybe<MerchantPaymentsService>;
    readonly policy?: Maybe<PolicySchema>;
    readonly tagging?: Maybe<TaggingServiceSchema>;
    readonly webhook?: Maybe<WebhookSchema>;
    readonly currentBrandPartner?: Maybe<BrandPartnerInfoSchema>;
    readonly currentCountry?: Maybe<Country>;
    readonly identity?: Maybe<IdentityServiceSchema>;
    readonly cs?: Maybe<CustomerSupportServiceSchema>;
    readonly notifications?: Maybe<NotificationsServiceSchema>;
    readonly storefront?: Maybe<StorefrontServiceSchema>;
};
export declare type SalesforceLeadInfo = {
    readonly __typename?: "SalesforceLeadInfo";
    readonly valid: Scalars["Boolean"];
    readonly firstName?: Maybe<Scalars["String"]>;
    readonly lastName?: Maybe<Scalars["String"]>;
    readonly email?: Maybe<Scalars["String"]>;
    readonly company?: Maybe<Scalars["String"]>;
};
export declare type ScheduledAddBudgetSchema = {
    readonly __typename?: "ScheduledAddBudgetSchema";
    readonly enabled: Scalars["Boolean"];
    readonly amount: CurrencyValue;
    readonly days: ReadonlyArray<Scalars["Int"]>;
};
export declare type ScreenCoordinates = {
    readonly x: Scalars["Float"];
    readonly y: Scalars["Float"];
};
export declare type SelectWpsShippingOptionInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly shippingOptionId: Scalars["String"];
    readonly additionalServiceOptions?: Maybe<ReadonlyArray<WpsAvailableServices>>;
};
export declare type SelectWpsShippingOptionMutation = {
    readonly __typename?: "SelectWPSShippingOptionMutation";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
    readonly wpsShipmentId?: Maybe<Scalars["String"]>;
    readonly trackingId?: Maybe<Scalars["String"]>;
    readonly providerId?: Maybe<Scalars["Int"]>;
};
export declare type SellerProfileVerificationDocType = "permanent_resident_card" | "business_license" | "vat_registration_certificate" | "passport" | "certificate_of_incorporation" | "national_id" | "partnership_agreement" | "citizenship_card" | "articles_of_incorporation" | "driver_license" | "state_id" | "social_security_card" | "recent_business_returns";
export declare type SellerProfileVerificationStatus = "REVIEWING" | "REJECTED" | "APPROVED" | "INCOMPLETE" | "COMPLETE";
export declare type SellerVerificationFeedback = {
    readonly __typename?: "SellerVerificationFeedback";
    readonly businessAddressIssue?: Maybe<Scalars["String"]>;
    readonly proofOfIdentificationIssue?: Maybe<Scalars["String"]>;
    readonly frontOfProofOfIdentificationIssue?: Maybe<Scalars["String"]>;
    readonly backOfProofOfIdentificationIssue?: Maybe<Scalars["String"]>;
    readonly proofOfIdentificationSelfieIssue?: Maybe<Scalars["String"]>;
    readonly proofOfBusinessIdentificationIssue?: Maybe<Scalars["String"]>;
    readonly entityTypeIssue?: Maybe<Scalars["String"]>;
    readonly firstNameIssue?: Maybe<Scalars["String"]>;
    readonly middleNameIssue?: Maybe<Scalars["String"]>;
    readonly lastNameIssue?: Maybe<Scalars["String"]>;
    readonly phoneNumberIssue?: Maybe<Scalars["String"]>;
    readonly dateOfBirthIssue?: Maybe<Scalars["String"]>;
    readonly countryOfDomicileIssue?: Maybe<Scalars["String"]>;
    readonly companyNameIssue?: Maybe<Scalars["String"]>;
    readonly regBusinessLicenseNumIssue?: Maybe<Scalars["String"]>;
    readonly isBeneficialOwnerOfRegBusIssue?: Maybe<Scalars["String"]>;
    readonly proofOfIdDocTypeIssue?: Maybe<Scalars["String"]>;
};
export declare type SellerVerificationSchema = {
    readonly __typename?: "SellerVerificationSchema";
    readonly hasCompleted: Scalars["Boolean"];
    readonly isKycVerification: Scalars["Boolean"];
    readonly status?: Maybe<SellerProfileVerificationStatus>;
    readonly kycVerification: KycVerificationSchema;
    readonly gmvCapReached: Scalars["Boolean"];
    readonly gmvCapGracePeriodDays?: Maybe<Scalars["Int"]>;
    readonly gmvCapGracePeriodEndDate?: Maybe<Datetime>;
    readonly impressionsPaused: Scalars["Boolean"];
    readonly paymentsBlocked: Scalars["Boolean"];
    readonly gmvCap?: Maybe<CurrencyValue>;
    readonly numSalesCap?: Maybe<Scalars["Int"]>;
    readonly actionRequired: Scalars["Boolean"];
    readonly lastUpdateTime?: Maybe<Datetime>;
    readonly adminFeedback?: Maybe<SellerVerificationFeedback>;
    readonly canStart: Scalars["Boolean"];
    readonly firstName?: Maybe<Scalars["String"]>;
    readonly middleName?: Maybe<Scalars["String"]>;
    readonly lastName?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly businessAddress?: Maybe<AddressSchema>;
    readonly domicileCountry?: Maybe<Country>;
    readonly dateOfBirth?: Maybe<Datetime>;
    readonly entityType?: Maybe<UserEntityType>;
    readonly companyName?: Maybe<Scalars["String"]>;
    readonly regBusinessLicenseNum?: Maybe<Scalars["String"]>;
    readonly isBeneficialOwnerOfRegBus?: Maybe<Scalars["Boolean"]>;
    readonly proofOfIdFiles?: Maybe<ReadonlyArray<MerchantFileSchema>>;
    readonly proofOfIdDocType?: Maybe<SellerProfileVerificationDocType>;
};
export declare type SendTestMessage = {
    readonly __typename?: "SendTestMessage";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type SendTestMessageInput = {
    readonly subscription: WebhookSubscriptionInput;
};
export declare type SentimentType = "INFO" | "WARNING" | "NEGATIVE";
export declare type SetMerchantFulfillmentExtension = {
    readonly __typename?: "SetMerchantFulfillmentExtension";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type SetMerchantFulfillmentExtensionInput = {
    readonly extensionDays?: Maybe<Scalars["Int"]>;
    readonly extensionDeadlineDate?: Maybe<DatetimeInput>;
};
export declare type SetWpsPackageTypeInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly packageType: WpsPackageType;
};
export declare type SetWpsPackageTypeMutation = {
    readonly __typename?: "SetWPSPackageTypeMutation";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type ShippableCountryCode = "BD" | "BE" | "FR" | "BG" | "BA" | "BB" | "BM" | "BO" | "JP" | "KZ" | "BT" | "JM" | "ZA" | "JO" | "TO" | "BR" | "BS" | "FI" | "FJ" | "BZ" | "RU" | "NL" | "NO" | "NA" | "KY" | "NG" | "RE" | "NZ" | "PA" | "MN" | "NP" | "RO" | "NU" | "CH" | "CO" | "GR" | "CL" | "BH" | "CA" | "SH" | "GY" | "CZ" | "CY" | "GD" | "GB" | "GA" | "VN" | "CR" | "NI" | "GI" | "GH" | "SZ" | "OM" | "TN" | "KG" | "KE" | "SR" | "KH" | "SV" | "SK" | "KR" | "SI" | "BW" | "KW" | "SM" | "SC" | "DZ" | "SA" | "SG" | "SE" | "DO" | "DM" | "DK" | "HR" | "DE" | "HU" | "GT" | "HN" | "US" | "JE" | "AD" | "PR" | "MU" | "LC" | "PT" | "TW" | "TT" | "PY" | "TR" | "LK" | "LI" | "LV" | "AI" | "LT" | "LU" | "UY" | "TH" | "PE" | "PK" | "PH" | "IS" | "PL" | "ZM" | "AE" | "VE" | "AG" | "VG" | "EE" | "VI" | "EG" | "AM" | "AL" | "EC" | "IT" | "AR" | "AU" | "AT" | "AW" | "IN" | "AZ" | "IE" | "ID" | "ES" | "ME" | "MD" | "MA" | "MC" | "UZ" | "MM" | "UA" | "RS" | "GE" | "MK" | "QA" | "MT" | "MV" | "MS" | "MY" | "MX" | "IL";
export declare type ShippingDetailsSchema = {
    readonly __typename?: "ShippingDetailsSchema";
    readonly name: Scalars["String"];
    readonly streetAddress1: Scalars["String"];
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly streetAddress3?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly zipcode?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly trackingId?: Maybe<Scalars["String"]>;
    readonly countryCode: CountryCode;
    readonly state?: Maybe<Scalars["String"]>;
    readonly region?: Maybe<Scalars["String"]>;
    readonly shipNote?: Maybe<Scalars["String"]>;
    readonly providerId?: Maybe<Scalars["Int"]>;
    readonly neighborhood?: Maybe<Scalars["String"]>;
    readonly country?: Maybe<Country>;
    readonly provider?: Maybe<ShippingProviderSchema>;
    readonly verificationState: AddressVerificationState;
};
export declare type ShippingOriginSettings = {
    readonly __typename?: "ShippingOriginSettings";
    readonly destinationRegion: Scalars["String"];
    readonly shippingType: Scalars["String"];
    readonly originCountryCode: Scalars["String"];
    readonly originCountryName?: Maybe<Scalars["String"]>;
};
export declare type ShippingPlanInput = {
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly skus: ReadonlyArray<ShippingPlanSkuInput>;
};
export declare type ShippingPlanSchema = {
    readonly __typename?: "ShippingPlanSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly skus?: Maybe<ReadonlyArray<ShippingPlanSkuSchema>>;
};
export declare type ShippingPlanSkuInput = {
    readonly variationId: Scalars["ObjectIdType"];
    readonly quantity: Scalars["Int"];
    readonly dimensions: PackageDimensionsInput;
};
export declare type ShippingPlanSkuSchema = {
    readonly __typename?: "ShippingPlanSKUSchema";
    readonly sku: Scalars["String"];
    readonly quantity: Scalars["Int"];
    readonly variationId: Scalars["ObjectIdType"];
    readonly dimensions: VariationDimensions;
    readonly weight: Weight;
};
export declare type ShippingProfileCollectionSchema = {
    readonly __typename?: "ShippingProfileCollectionSchema";
    readonly shippingProfiles: ReadonlyArray<ShippingProfileSchema>;
    readonly shippingProfileCount: Scalars["Int"];
};
export declare type ShippingProfileCollectionSchemaShippingProfilesArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ShippingProfileSearchType>;
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
};
export declare type ShippingProfileCollectionSchemaShippingProfileCountArgs = {
    query?: Maybe<Scalars["String"]>;
    searchType?: Maybe<ShippingProfileSearchType>;
};
export declare type ShippingProfileLinkInput = {
    readonly shippingProfileId?: Maybe<Scalars["ObjectIdType"]>;
    readonly productIds: ReadonlyArray<Scalars["ObjectIdType"]>;
};
export declare type ShippingProfileMutations = {
    readonly __typename?: "ShippingProfileMutations";
    readonly upsertShippingProfile?: Maybe<UpsertShippingProfile>;
    readonly removeShippingProfile?: Maybe<RemoveShippingProfile>;
    readonly linkShippingProfile?: Maybe<LinkShippingProfile>;
};
export declare type ShippingProfileMutationsUpsertShippingProfileArgs = {
    input?: Maybe<ShippingProfileUpsertInput>;
};
export declare type ShippingProfileMutationsRemoveShippingProfileArgs = {
    input?: Maybe<ShippingProfileRemoveInput>;
};
export declare type ShippingProfileMutationsLinkShippingProfileArgs = {
    input?: Maybe<ShippingProfileLinkInput>;
};
export declare type ShippingProfileRemoveInput = {
    readonly idsToRemove?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
};
export declare type ShippingProfileSchema = {
    readonly __typename?: "ShippingProfileSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: Scalars["String"];
    readonly shippingDetailsPerDestination?: Maybe<ReadonlyArray<DestinationShippingProfileSchema>>;
    readonly linkedProductCount: Scalars["Int"];
    readonly description: Scalars["String"];
};
export declare type ShippingProfileSearchType = "PROFILE_ID" | "PRODUCT_ID" | "PROFILE_NAME";
export declare type ShippingProfileUpsertInput = {
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly name?: Maybe<Scalars["String"]>;
    readonly shippingDetailsPerDestination?: Maybe<ReadonlyArray<DestinationShippingProfileInput>>;
};
export declare type ShippingProviderCountryInput = {
    readonly countryCode: CountryCode;
    readonly timelineOperations?: Maybe<ReadonlyArray<ShippingProviderOperationInput>>;
};
export declare type ShippingProviderCountrySchema = {
    readonly __typename?: "ShippingProviderCountrySchema";
    readonly country: Country;
    readonly timelineOperations?: Maybe<ReadonlyArray<ShippingProviderOperationSchema>>;
};
export declare type ShippingProviderInput = {
    readonly providerId: Scalars["Int"];
    readonly name: Scalars["String"];
    readonly trackingUrl: Scalars["String"];
    readonly providerUrl: Scalars["String"];
    readonly originCountry?: Maybe<CountryCode>;
    readonly inputTrackingSources?: Maybe<ReadonlyArray<ShippingProviderTrackerInput>>;
    readonly inputReleaseTime?: Maybe<DatetimeInput>;
    readonly inputReleaseType?: Maybe<ShippingProviderOperationTypeEnum>;
    readonly inputRestrictCountries?: Maybe<ReadonlyArray<ShippingProviderCountryInput>>;
    readonly postalCodeRequired?: Maybe<Scalars["Boolean"]>;
    readonly countryRequired?: Maybe<Scalars["Boolean"]>;
    readonly trackingShipDateRequired?: Maybe<Scalars["Boolean"]>;
    readonly isCnProvider?: Maybe<Scalars["Boolean"]>;
    readonly shippingProviderType?: Maybe<ShippingProviderState>;
    readonly needAddTimelineOperation?: Maybe<Scalars["Boolean"]>;
};
export declare type ShippingProviderOperationInput = {
    readonly dateTime?: Maybe<DatetimeInput>;
    readonly type?: Maybe<ShippingProviderOperationTypeEnum>;
};
export declare type ShippingProviderOperationSchema = {
    readonly __typename?: "ShippingProviderOperationSchema";
    readonly dateTime?: Maybe<Datetime>;
    readonly type?: Maybe<ShippingProviderOperationTypeEnum>;
};
export declare type ShippingProviderOperationTypeEnum = "REMOVE_SHIPPING_PROVIDER" | "ADD_SHIPPING_PROVIDER";
export declare type ShippingProviderPolicySchema = {
    readonly __typename?: "ShippingProviderPolicySchema";
    readonly destinationCountry?: Maybe<Country>;
    readonly origin?: Maybe<Scalars["String"]>;
    readonly condition?: Maybe<Scalars["String"]>;
    readonly allowedProviderType: Scalars["String"];
    readonly shippingProviders: ReadonlyArray<ShippingProviderSchema>;
    readonly note?: Maybe<Scalars["String"]>;
    readonly wishpostChannels?: Maybe<ReadonlyArray<Scalars["String"]>>;
};
export declare type ShippingProviderSchema = {
    readonly __typename?: "ShippingProviderSchema";
    readonly id: Scalars["Int"];
    readonly name: Scalars["String"];
    readonly trackingUrl: Scalars["String"];
    readonly providerUrl: Scalars["String"];
    readonly originCountry?: Maybe<Country>;
    readonly trackers?: Maybe<ReadonlyArray<ShippingProviderTrackerSchema>>;
    readonly timelineOperations?: Maybe<ReadonlyArray<ShippingProviderOperationSchema>>;
    readonly restrictionCountries?: Maybe<ReadonlyArray<ShippingProviderCountrySchema>>;
    readonly status: Scalars["Boolean"];
    readonly lastUpdate?: Maybe<Datetime>;
    readonly postalCodeRequired?: Maybe<Scalars["Boolean"]>;
    readonly countryRequired?: Maybe<Scalars["Boolean"]>;
    readonly trackingShipDateRequired?: Maybe<Scalars["Boolean"]>;
    readonly isCnProvider?: Maybe<Scalars["Boolean"]>;
    readonly shippingProviderType?: Maybe<ShippingProviderState>;
    readonly isQualified?: Maybe<Scalars["Boolean"]>;
    readonly qualifiedNote?: Maybe<Scalars["String"]>;
    readonly trackingFormats?: Maybe<ReadonlyArray<TrackingIdFormatSchema>>;
};
export declare type ShippingProviderSchemaTrackingFormatsArgs = {
    destCountryCode?: Maybe<CountryCode>;
};
export declare type ShippingProviderSearchType = "PROVIDER_ID" | "NAME";
export declare type ShippingProviderState = "NON_TEST_SERVICE" | "TEST_SERVICE" | "UNREGISTER_TEST_SERVICE" | "ACTIVE" | "DELETED";
export declare type ShippingProviderTrackerInput = {
    readonly trackingSource: TrackingSourceEnum;
    readonly trackingSlug: Scalars["String"];
    readonly ratio: Scalars["Int"];
};
export declare type ShippingProviderTrackerSchema = {
    readonly __typename?: "ShippingProviderTrackerSchema";
    readonly trackingSource: TrackingSourceEnum;
    readonly trackingName: Scalars["String"];
    readonly trackingSlug?: Maybe<Scalars["String"]>;
    readonly ratio: Scalars["Int"];
};
export declare type ShippingSchema = {
    readonly __typename?: "ShippingSchema";
    readonly defaultShipping?: Maybe<ReadonlyArray<DefaultShippingSchema>>;
    readonly domesticShipping?: Maybe<ReadonlyArray<DomesticShippingSchema>>;
    readonly warehouseCountryShipping?: Maybe<ReadonlyArray<WarehouseCountryShippingSchema>>;
};
export declare type ShippingSchemaWarehouseCountryShippingArgs = {
    shippingTypes?: Maybe<ReadonlyArray<WarehouseShippingType>>;
};
export declare type ShippingSettingMutations = {
    readonly __typename?: "ShippingSettingMutations";
    readonly updateShippingSetting?: Maybe<UpdateShippingSetting>;
};
export declare type ShippingSettingMutationsUpdateShippingSettingArgs = {
    useShopifyShippingRate?: Maybe<Scalars["Boolean"]>;
    countryShipping?: Maybe<ReadonlyArray<CountryShippingSetting>>;
    otherCountriesShipping?: Maybe<OtherCountriesShippingSetting>;
    isUpsert?: Maybe<Scalars["Boolean"]>;
};
export declare type ShippingSettingsSchema = {
    readonly __typename?: "ShippingSettingsSchema";
    readonly country: Country;
    readonly enabled: Scalars["Boolean"];
    readonly price?: Maybe<CurrencyValue>;
};
export declare type ShopifyOnboardingAuthInfo = {
    readonly __typename?: "ShopifyOnboardingAuthInfo";
    readonly shopUrl?: Maybe<Scalars["String"]>;
    readonly apiKey: Scalars["String"];
    readonly authToken?: Maybe<Scalars["String"]>;
};
export declare type ShopifySchema = {
    readonly __typename?: "ShopifySchema";
    readonly apiKey?: Maybe<Scalars["String"]>;
    readonly shopUrl: Scalars["String"];
    readonly shippingProfileId: Scalars["String"];
    readonly hasFlatRates: Scalars["Boolean"];
    readonly eligibleProductCount: Scalars["Int"];
    readonly onboardingAuthToken: Scalars["String"];
    readonly preorderCount: Scalars["Int"];
};
export declare type SignupSource = "SIGNUP_GREEN_CHANNEL" | "SIGNUP_V4" | "SIGNUP_V5" | "SIGNUP_V3" | "SIGNUP_MOBILE" | "SIGNUP_MERCHANT_PLUS" | "SIGNUP_EXPRESS";
export declare type SortOrderType = "ASC" | "DESC";
export declare type SpecialOrderProgramSchema = {
    readonly __typename?: "SpecialOrderProgramSchema";
    readonly name: Scalars["String"];
    readonly taskLink?: Maybe<Scalars["String"]>;
};
export declare type StaticFines = {
    readonly __typename?: "StaticFines";
    readonly cancellationFine: CurrencyValue;
};
export declare type StorefrontCustomizationSchema = {
    readonly __typename?: "StorefrontCustomizationSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly feeds: ReadonlyArray<StorefrontFeedSchema>;
    readonly visualTheme: StorefrontVisualThemeSchema;
};
export declare type StorefrontFeedSchema = {
    readonly __typename?: "StorefrontFeedSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: Scalars["String"];
};
export declare type StorefrontSchema = {
    readonly __typename?: "StorefrontSchema";
    readonly name: Scalars["String"];
    readonly creationDate: Datetime;
    readonly reviewSummary: StoreReviewSummarySchema;
    readonly location?: Maybe<Country>;
    readonly customization?: Maybe<StorefrontCustomizationSchema>;
};
export declare type StorefrontServiceSchema = {
    readonly __typename?: "StorefrontServiceSchema";
    readonly serviceEnabled: Scalars["Boolean"];
    readonly merchantEnabled: Scalars["Boolean"];
    readonly forMerchant?: Maybe<StorefrontSchema>;
};
export declare type StorefrontServiceSchemaMerchantEnabledArgs = {
    id: Scalars["ObjectIdType"];
};
export declare type StorefrontServiceSchemaForMerchantArgs = {
    id: Scalars["ObjectIdType"];
};
export declare type StorefrontVisualThemeSchema = {
    readonly __typename?: "StorefrontVisualThemeSchema";
    readonly name: Scalars["String"];
    readonly primaryColor: Scalars["String"];
    readonly secondaryColor: Scalars["String"];
};
export declare type StoreReviewSummarySchema = {
    readonly __typename?: "StoreReviewSummarySchema";
    readonly count: Scalars["Int"];
    readonly averageRating: Scalars["Float"];
};
export declare type SubmitProductVideoContentManualReview = {
    readonly __typename?: "SubmitProductVideoContentManualReview";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type SubmitProductVideoContentManualReviewInput = {
    readonly videoId: Scalars["ObjectIdType"];
    readonly productId: Scalars["ObjectIdType"];
    readonly merchantId: Scalars["ObjectIdType"];
    readonly videoTraits: ProductVideoContentReviewTraits;
    readonly videoRelatesToProduct: Scalars["Boolean"];
    readonly videoQuality: VideoQualityLevel;
};
export declare type SubmitProductVideoContentReview = {
    readonly __typename?: "SubmitProductVideoContentReview";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type SubmitProductVideoContentReviewInput = {
    readonly jobId: Scalars["ObjectIdType"];
    readonly videoTraits: ProductVideoContentReviewTraits;
    readonly videoRelatesToProduct: Scalars["Boolean"];
    readonly videoQuality: VideoQualityLevel;
};
export declare type SubmitProductVideoIpManualReview = {
    readonly __typename?: "SubmitProductVideoIPManualReview";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type SubmitProductVideoIpManualReviewInput = {
    readonly videoId: Scalars["ObjectIdType"];
    readonly productId: Scalars["ObjectIdType"];
    readonly merchantId: Scalars["ObjectIdType"];
    readonly ipViolationReason?: Maybe<ProductVideoIpViolationReason>;
    readonly ipInfringedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly blurredInformationCategory?: Maybe<BlurredInformationCategory>;
};
export declare type SubmitProductVideoIpReview = {
    readonly __typename?: "SubmitProductVideoIPReview";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type SubmitProductVideoIpReviewInput = {
    readonly jobId: Scalars["ObjectIdType"];
    readonly ipViolationReason?: Maybe<ProductVideoIpViolationReason>;
    readonly ipInfringedBrandId?: Maybe<Scalars["ObjectIdType"]>;
    readonly blurredInformationCategory?: Maybe<BlurredInformationCategory>;
};
export declare type SubmitWarehouseVerificationRequestInput = {
    readonly warehouseId: Scalars["ObjectIdType"];
    readonly documentUrls: ReadonlyArray<Scalars["String"]>;
};
export declare type SubmitWarehouseVerificationRequestMutation = {
    readonly __typename?: "SubmitWarehouseVerificationRequestMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type SubscriptionEndpointType = "URL" | "ARN";
export declare type SwedenConfirmedDeliveredCarrierTypes = {
    readonly __typename?: "SwedenConfirmedDeliveredCarrierTypes";
    readonly carrierId: Scalars["Int"];
    readonly swedenDeliveredCarrierTypes: ReadonlyArray<SwedenDeliveredCarrierType>;
};
export declare type SwedenDeliveredCarrierType = "IntraEUCarrier" | "IntlEUCarrier";
export declare type TaggingMutations = {
    readonly __typename?: "TaggingMutations";
    readonly productVideoContentTag?: Maybe<ProductVideoContentTagMutations>;
    readonly productVideoIpTag?: Maybe<ProductVideoIpTagMutations>;
    readonly platformSweeps?: Maybe<PlatformSweepMutations>;
};
export declare type TaggingServiceSchema = {
    readonly __typename?: "TaggingServiceSchema";
    readonly ipViolationTaggingManagement?: Maybe<IpViolationTaggingManagement>;
    readonly productVideoContentTaggerJob?: Maybe<ProductVideoTaggerJobSchema>;
    readonly productVideoIpTaggerJob?: Maybe<ProductVideoTaggerJobSchema>;
    readonly generalTaggingManagement?: Maybe<GeneralTaggingManagement>;
};
export declare type TaggingViolationReason = {
    readonly __typename?: "TaggingViolationReason";
    readonly reason: CounterfeitReasonCode;
    readonly internalDisplayName: Scalars["String"];
    readonly displayName?: Maybe<Scalars["String"]>;
    readonly subcategories?: Maybe<ReadonlyArray<TaggingViolationSubcategory>>;
    readonly isBrandTaggingReason: Scalars["Boolean"];
};
export declare type TaggingViolationSubcategory = {
    readonly __typename?: "TaggingViolationSubcategory";
    readonly subcategory: TaggingViolationSubReasonCode;
    readonly internalDisplayName: Scalars["String"];
    readonly displayName?: Maybe<Scalars["String"]>;
};
export declare type TaggingViolationSubReasonCode = "BRAND_DISCREPANCY" | "CONFEDERATE_FLAG" | "RECREATIONAL_DRUGS_AND_CHEMICALS" | "SUBSCRIPTIONS_OR_MEMBERSHIPS" | "DOMESTIC_TERRORISTS_MEMORABILIA" | "VAPE_LIQUID" | "PLANT_SEED_WITH_IMPOSSIBLE_CLAIM" | "DANGEROUS_NON_CPA_VIOLATION" | "LASER_DISC" | "PRODUCT_VARIANCE" | "PRESCRIPTION_STRENGTH_ITEMS" | "NOT_FOCUS_OF_MAIN_IMAGE" | "REVIEW_SHOW_WRONG_PRODUCT" | "SPY_CAMERAS" | "TERRORIST_PROMOTION_GROUPS" | "EURO_CURRENCY" | "UNCENSORED_EROTIC_ANIME" | "PROHIBITED_CUSTOMS_CN" | "ASSAULT_WEAPON_CONVERSION_PIECES" | "IMAGE_OR_TITLE_CHANGE" | "SIZE_MISREPRESENTATION_MAIN_IMAGE" | "SIZE_NOT_AS_ADVERTISED" | "PENICILLIN" | "VHS_TAPE" | "VIDEO_GAME" | "EPA_EMMISIONS_DEFEAT_US" | "RATING_SHOW_WRONG_PRODUCT" | "HUMAN_GROWTH_HORMONE" | "BLURRED_LOGOS" | "SEATBELTS" | "FULLY_LOADED_TV_BOXES" | "GUN_SILENCER_COMPONENTS" | "ANIME_PRODUCTS" | "LIVE_ANIMAL" | "UNVERIFIED_WARRANTIES" | "ALCOHOL" | "TOBACCO" | "SIZE_MISPRESENTATION" | "POPPERS_AND_MUSCLE_RELAXANTS" | "HATEFUL_IMAGERY" | "NOT_FOCUS_MAIN_IMAGE" | "UNREALISTIC_HEALTH_CLAIM_PRODUCTS" | "GRADUAL_CHANGE" | "GUN_SILENCER_MISUSE" | "METAL_NINJA_STARS" | "CN_PROHIBITED_PRODUCT_STUN_GUNS" | "FULLY_EXPOSED_NIPPLE" | "HOUSEKEEPING_TOUR_PACKAGES" | "RECORDS" | "UNVERIFIED_LOGO" | "NUDE_MINOR_IN_NON_SEXUAL_CONTEXT" | "MERCAHNT_CONTACT_OR_REFERAL" | "RACIAL_CLEANSING" | "HIDDEN_SEX_TOYS" | "PLANTS" | "VITAMINS_AND_SUPPLEMENTS" | "FOOD" | "ENDANGERED_SPECIES" | "MOD_BOXES" | "UNSUPPORTED_MEDICAL_CLAIMS" | "BULLYING" | "BRANDING_CHANGE" | "EROTIC_SETUPS" | "OTC_MEDICATION" | "HOVERBOARDS" | "EPA_PESTICIDES_US" | "HUMAN_BY_PRODUCTS" | "COUNTERFEIT_CURRENCY" | "VIRTUAL_MONEY" | "MARIJUANA" | "TIRE_SPIKES" | "BLUE_RAY" | "PET_FOOD" | "ECIGARETTE_VAPE" | "IMAGE_OF_MASTURBATION" | "DVD" | "CHLOROFORM" | "ANTI_GAY" | "UNVERFIED_PRICE_INFORMATION" | "TOBACCO_SEEDS" | "MODELS_IN_LINGERIE" | "BLURRED_WATERMARKS" | "COMPETITOR_WATERMARK" | "ODOMETER_CORRECTION_TOOLS" | "PROUD_BOY_MEMORABILIA" | "MISLEADING_KEY_FEATURE" | "CHILD_HARNESS" | "PILL_PRESSES" | "HITLER_IMAGERY" | "OTHER_WHITE_SUPREMACY_MEMORABILIA" | "PESTICIDES" | "BLURRED_TAGS" | "UNAUTHROIZED_USE_WISH" | "NAZI_MEMORABILIA" | "HATE_SPEECH" | "MAGNETS_AS_TOYS" | "IMITATION_CURRENCY" | "EXPLOSIVE_WEAPONS" | "CD" | "US_PROP_MONEY" | "PRICE_POINT_UNREASONABLE" | "CONTACT_LENS_SOLUTION" | "KKK_PARAPHERNALIA" | "FULLY_EXPOSED_ANUS" | "BEVERAGES" | "CPSC_VIOLATION" | "UNVERIFIED_SHIPPING_TIME_FRAME" | "IMAGE_OF_PENETRATION" | "CASSETTE_TAPE" | "GLYPHOSATE" | "CN_PROHIBITED_PRODUCT_TASERS" | "GIFT_CARDS_OR_ACCESS_CODES" | "PLANT_SEEDS" | "FULLY_EXPOSED_GENITAL" | "UNVERIFIED_FREE_SHIPPING" | "LASER_POINTERS" | "VALUE_VARIANCE" | "SEXUALLY_EXPLICIT_MATERIAL" | "JAMMERS" | "FIREARMS_AND_GUNS" | "CHILD_CARSEAT" | "CN_PROHIBITED_PRODUCT_IMITATION_FIREARMS" | "SEXUAL_CONTENT_INCLUDING_MINOR" | "GUN_BUILDING_KITS" | "PLANT_SEED_WITH_IMPOSSIBLE_CLAIM_V2" | "MISLEADING_WIG" | "IMAGE_NOT_PRODUCT" | "EYELASH_GROWTH_SERUM" | "FEEDBACK_ABOUT_NO_PRODUCT" | "CIGARETTE" | "CN_PROHIBITED_PRODUCT_BB_GUNS" | "NOT_DESCRIBE_AVAILABLE_QUANTITY" | "CN_PROHIBITED_PRODUCT_AIRSOFT" | "HATEFUL_CORONAVIRUS_PRODUCTS" | "INJECTABLE_ITEMS" | "SOFTWARE" | "SIZE_COLOR_OPTION_GAMING" | "HATE_GROUPS" | "QANON_MEMORABILIA" | "SURPRISE_BOX" | "CUSTOMER_FEEDBACK_ABOUT_FALSE_SPEC" | "BUTANE" | "PURCHANSED_FOLLOWERS" | "GUN_SILENCERS" | "CONTACTS" | "TITLE_IMAGE_MISMATCH" | "COCKROACH_CHALK" | "HOOKAH_PEN" | "DANGEROUS_CPA_VIOLATION" | "AMMUNITION";
export declare type TakedownRequestContestSchema = {
    readonly __typename?: "TakedownRequestContestSchema";
    readonly contestId: Scalars["ObjectIdType"];
    readonly state: TakedownRequestContestState;
    readonly source: TakedownRequestContestSource;
    readonly product: ProductSchema;
    readonly merchant?: Maybe<MerchantSchema>;
};
export declare type TakedownRequestContestSource = "REPORTED" | "NONE" | "IMAGE_MATCH";
export declare type TakedownRequestContestState = "REJECTED" | "APPROVED" | "PENDING_REVIEW";
export declare type TakedownRequestMutations = {
    readonly __typename?: "TakedownRequestMutations";
    readonly createTakedownRequest?: Maybe<CreateTakedownRequest>;
};
export declare type TakedownRequestMutationsCreateTakedownRequestArgs = {
    input?: Maybe<CreateTakedownRequestInput>;
};
export declare type TakedownRequestSchema = {
    readonly __typename?: "TakedownRequestSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly reportedDate: Datetime;
    readonly brand: BrandSchema;
    readonly typeOfInfringement: TypeOfInfringement;
    readonly state: TakedownRequestState;
    readonly notes?: Maybe<Scalars["String"]>;
    readonly products: ReadonlyArray<TakedownRequestContestSchema>;
    readonly numProducts: Scalars["Int"];
};
export declare type TakedownRequestSchemaProductsArgs = {
    offset?: Maybe<Scalars["Int"]>;
    count?: Maybe<Scalars["Int"]>;
    states?: Maybe<ReadonlyArray<TakedownRequestContestState>>;
};
export declare type TakedownRequestSchemaNumProductsArgs = {
    states?: Maybe<ReadonlyArray<TakedownRequestContestState>>;
};
export declare type TakedownRequestState = "ACTIVE" | "COMPLETE" | "PENDING";
export declare type TaxAuthoritySchema = {
    readonly __typename?: "TaxAuthoritySchema";
    readonly id: Scalars["String"];
    readonly name: Scalars["String"];
    readonly type: TaxAuthorityType;
    readonly officialName?: Maybe<Scalars["String"]>;
};
export declare type TaxAuthorityType = "FCP_ST" | "COUNTY_SALES_USE" | "DISTRICT_FOOD_BEVERAGE" | "MWST" | "GST" | "CITY_AMUSEMENT" | "HST" | "PIS" | "STATE_FOOD_BEVERAGE" | "GIT" | "IGST" | "ICMS_RD" | "VAT" | "IPI" | "DISTRICT_SALES_USE" | "DISTRICT_FEES" | "TOURISM_TAX_ADDITIONAL" | "COUNTY_AMUSEMENT" | "NHIL" | "COUNTY_RENTAL" | "CITY_RENTAL" | "CITY_FOOD_BEVERAGE" | "ITBMS" | "EEE" | "CITY_FEES" | "ICMS_ST_CNAE_IVA" | "BMP" | "SCT" | "IGV" | "TOURISM_TAX" | "GCT" | "CSU" | "CST" | "THSBT" | "STATE_SALES_USE" | "IGI" | "IVA" | "MOT" | "CBT" | "PST" | "ISS" | "ISV" | "IST" | "ICMS" | "SUT" | "COF" | "COM" | "ICMS_ST" | "FCP" | "STATE_AMUSEMENT" | "COMPENSATION_CESS" | "KDV" | "PVM" | "ICMS_ST_CNAE" | "FEE" | "IMI" | "PDV" | "ICMS_PMC" | "CLT" | "OMB" | "TVA" | "SGST" | "ST" | "SUFRAMA" | "EXC" | "MRDT" | "PCL" | "IGIC" | "UTGST" | "DISTRICT_AMUSEMENT" | "IPSI" | "ITBIS" | "DPH" | "TT" | "DISTRICT_RENTAL" | "COUNTY_FEES" | "COUNTY_FOOD_BEVERAGE" | "CGST" | "CITY_SALES_USE" | "CONSUMPTION_TAX" | "II" | "ICMS_PF" | "MVA" | "TELECOM" | "STATE_FEES" | "ICMS_CR" | "QST" | "STATE_RENTAL";
export declare type TaxConstants = {
    readonly __typename?: "TaxConstants";
    readonly us: UsTaxConstants;
    readonly ca: CaTaxConstants;
    readonly marketplaceCountries: ReadonlyArray<TaxMarketplaceCountry>;
    readonly marketplaceUnions: ReadonlyArray<TaxMarketplaceUnion>;
    readonly ukVatInfo: UkVatInfoSchema;
};
export declare type TaxConstantsMarketplaceCountriesArgs = {
    includeUpcoming?: Maybe<Scalars["Boolean"]>;
};
export declare type TaxConstantsMarketplaceUnionsArgs = {
    includeUpcoming?: Maybe<Scalars["Boolean"]>;
};
export declare type TaxLiabilitySchema = {
    readonly __typename?: "TaxLiabilitySchema";
    readonly userEntityTypeForRemit?: Maybe<KycMerchantType>;
    readonly remitType?: Maybe<CommerceTransactionTaxRemitType>;
    readonly remitPercentage?: Maybe<Scalars["Float"]>;
};
export declare type TaxMarketplaceCountry = {
    readonly __typename?: "TaxMarketplaceCountry";
    readonly country: Country;
    readonly launchDate?: Maybe<Datetime>;
};
export declare type TaxMarketplaceUnion = {
    readonly __typename?: "TaxMarketplaceUnion";
    readonly union: Union;
    readonly launchDate?: Maybe<Datetime>;
};
export declare type TaxSetting = {
    readonly __typename?: "TaxSetting";
    readonly id: Scalars["ObjectIdType"];
    readonly authority: TaxSettingAuthority;
    readonly taxNumber?: Maybe<Scalars["String"]>;
    readonly taxNumberType?: Maybe<TaxSettingTaxNumberType>;
    readonly merchantId: Scalars["ObjectIdType"];
    readonly lastUpdated: Datetime;
    readonly status: CommerceMerchantTaxInfoStatus;
    readonly reviewStatus?: Maybe<CommerceMerchantReviewStatus>;
    readonly certificateFileUrl?: Maybe<Scalars["String"]>;
    readonly taxCertificateFile?: Maybe<MerchantFileSchema>;
    readonly ossRegistrationCountry?: Maybe<Country>;
    readonly germanyDetails?: Maybe<TaxSettingGermanyDetails>;
    readonly mexicoDetails?: Maybe<TaxSettingMexicoDetails>;
    readonly taxLiability?: Maybe<ReadonlyArray<TaxLiabilitySchema>>;
    readonly euDetails?: Maybe<TaxSettingEuDetails>;
};
export declare type TaxSettingTaxLiabilityArgs = {
    whenShippingFromDomicileCountry?: Maybe<Scalars["Boolean"]>;
};
export declare type TaxSettingAuthority = {
    readonly __typename?: "TaxSettingAuthority";
    readonly displayName?: Maybe<Scalars["String"]>;
    readonly stateCode?: Maybe<Scalars["String"]>;
    readonly country: Country;
    readonly level: TaxSettingAuthorityLevel;
};
export declare type TaxSettingAuthorityLevel = "COUNTY" | "CITY" | "STATE" | "DISTRICT" | "COUNTRY";
export declare type TaxSettingEuDetails = {
    readonly __typename?: "TaxSettingEUDetails";
    readonly ustSt1T1Number?: Maybe<Scalars["String"]>;
};
export declare type TaxSettingGermanyDetails = {
    readonly __typename?: "TaxSettingGermanyDetails";
    readonly noNumberReason?: Maybe<CommerceMerchantTaxInfoGermanyNoNumberReason>;
};
export declare type TaxSettingMexicoDetails = {
    readonly __typename?: "TaxSettingMexicoDetails";
    readonly defaultShipFromIsMx?: Maybe<Scalars["Boolean"]>;
};
export declare type TaxSettingsInput = {
    readonly taxNumber?: Maybe<Scalars["String"]>;
    readonly countryCode: CountryCode;
    readonly ossRegistrationCountryCode?: Maybe<CountryCode>;
    readonly authorityLevel: TaxSettingAuthorityLevel;
    readonly stateCode?: Maybe<Scalars["String"]>;
    readonly displayName?: Maybe<Scalars["String"]>;
    readonly taxNumberType?: Maybe<TaxSettingTaxNumberType>;
    readonly certificateFileUrl?: Maybe<Scalars["String"]>;
    readonly mxDefaultShipFromIsMx?: Maybe<Scalars["Boolean"]>;
    readonly ustSt1T1Number?: Maybe<Scalars["String"]>;
};
export declare type TaxSettingsMutations = {
    readonly __typename?: "TaxSettingsMutations";
    readonly upsertTaxSettings: UpsertTaxSettingsMutation;
};
export declare type TaxSettingsMutationsUpsertTaxSettingsArgs = {
    input: UpsertTaxSettingsInput;
};
export declare type TaxSettingTaxNumberType = "VALUE_ADDED_TAX" | "NATIONAL_INSURANCE_NUMBER" | "OSS" | "OTHER" | "COMPANY_REGISTRITION_NUMBER" | "TAX_IDENTIFICATION_NUMBER";
export declare type TaxTargetCurrency = "CUSTOMER" | "MERCHANT" | "AUTHORITY";
export declare type TaxType = "US_SC" | "US_IM" | "US_SA" | "INTERNATIONAL_EXC" | "INTERNATIONAL_ES" | "US_VG" | "US_MVT" | "US_SV" | "INTERNATIONAL_EC" | "US_US" | "US_UU" | "INTERNATIONAL_CA1" | "INTERNATIONAL_ER" | "US_CU" | "INTERNATIONAL_NL" | "INTERNATIONAL_UN" | "INTERNATIONAL_MVT" | "INTERNATIONAL_SN" | "US_CA" | "US_BO" | "INTERNATIONAL_NR" | "US_UN" | "INTERNATIONAL_TR" | "INTERNATIONAL_US" | "INTERNATIONAL_SA" | "INTERNATIONAL_ZI" | "INTERNATIONAL_DS" | "US_S" | "INTERNATIONAL_ZC" | "INTERNATIONAL_SI" | "INTERNATIONAL_ZE" | "INTERNATIONAL_RC" | "US_IC" | "US_RC" | "US_CA1" | "US_GR" | "US_STK" | "US_RU" | "INTERNATIONAL_ZR" | "INTERNATIONAL_TE" | "US_LT" | "US_RS" | "US_ZE" | "INTERNATIONAL_IR" | "INTERNATIONAL_IS" | "INTERNATIONAL_VG" | "INTERNATIONAL_AC" | "INTERNATIONAL_MP" | "INTERNATIONAL_CA" | "INTERNATIONAL_IC" | "INTERNATIONAL_STK" | "INTERNATIONAL_S" | "US_ZR" | "US_EXC" | "US_NL" | "INTERNATIONAL_IM" | "INTERNATIONAL_MA";
export declare type TermsOfServiceRegionType = "EU" | "CN" | "US";
export declare type TermsOfServiceSchema = {
    readonly __typename?: "TermsOfServiceSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly tosType: TermsOfServiceType;
    readonly version: Scalars["Int"];
    readonly region?: Maybe<TermsOfServiceRegionType>;
    readonly releaseDate: Datetime;
    readonly canAccept: Scalars["Boolean"];
    readonly merchantTermsOfServiceAgreement?: Maybe<MerchantTermsOfServiceAgreementSchema>;
};
export declare type TermsOfServiceType = "MERCHANT" | "PAYMENT_REAL_NAME_AUTH" | "MERCHANT_PARTNER" | "PRODUCT_BOOST" | "WISH_EXPRESS" | "UPS" | "WISH_EXPRESS_RETURN" | "WPS" | "EPC";
export declare type TicketSearchType = "PRODUCT_ID" | "ID" | "TRANSACTION_ID" | "USER_NAME" | "ORDER_ID" | "SKU";
export declare type TicketSortFieldType = "CREATED_TIME" | "LAST_UPDATE";
export declare type Timedelta = {
    readonly __typename?: "Timedelta";
    readonly seconds: Scalars["Int"];
    readonly minutes: Scalars["Float"];
    readonly hours: Scalars["Float"];
    readonly days: Scalars["Float"];
};
export declare type TodoItem = {
    readonly __typename?: "TodoItem";
    readonly id: Scalars["ObjectIdType"];
    readonly type: MerchantTodoItemType;
    readonly sentiment: MerchantTodoItemSentiment;
    readonly completed: Scalars["Boolean"];
    readonly snoozeOptionText?: Maybe<Scalars["String"]>;
    readonly canSnooze: Scalars["Boolean"];
    readonly snoozeCount: Scalars["Int"];
    readonly snoozeHours?: Maybe<Scalars["Int"]>;
    readonly pinned: Scalars["Boolean"];
};
export declare type TodoSchema = {
    readonly __typename?: "TodoSchema";
    readonly items: ReadonlyArray<TodoItem>;
};
export declare type TosServiceSchema = {
    readonly __typename?: "TosServiceSchema";
    readonly termsOfService?: Maybe<TermsOfServiceSchema>;
};
export declare type TosServiceSchemaTermsOfServiceArgs = {
    tosType: TermsOfServiceType;
    version?: Maybe<Scalars["Int"]>;
    country?: Maybe<CountryCode>;
};
export declare type TrackingCheckpointLocationSchema = {
    readonly __typename?: "TrackingCheckpointLocationSchema";
    readonly city?: Maybe<Scalars["String"]>;
    readonly state?: Maybe<Scalars["String"]>;
    readonly country?: Maybe<Country>;
    readonly zipcode?: Maybe<Scalars["String"]>;
    readonly coordinates?: Maybe<GeoCoordinates>;
};
export declare type TrackingCheckpointSchema = {
    readonly __typename?: "TrackingCheckpointSchema";
    readonly date: Datetime;
    readonly resultingTrackingState: CheckpointAfterActionState;
    readonly message?: Maybe<Scalars["String"]>;
    readonly wishpostAction?: Maybe<Scalars["String"]>;
    readonly type?: Maybe<TrackingInfoCheckpointType>;
    readonly location: TrackingCheckpointLocationSchema;
};
export declare type TrackingDisputeHub = {
    readonly __typename?: "TrackingDisputeHub";
    readonly disputeCount?: Maybe<Scalars["Int"]>;
    readonly disputes?: Maybe<ReadonlyArray<TrackingDisputeSchema>>;
};
export declare type TrackingDisputeHubDisputeCountArgs = {
    states: ReadonlyArray<TrackingDisputeState>;
    searchType?: Maybe<TrackingDisputeSearchType>;
    query?: Maybe<Scalars["String"]>;
    creationDateStart?: Maybe<DatetimeInput>;
    creationDateEnd?: Maybe<DatetimeInput>;
};
export declare type TrackingDisputeHubDisputesArgs = {
    offset?: Maybe<Scalars["Int"]>;
    limit?: Maybe<Scalars["Int"]>;
    states: ReadonlyArray<TrackingDisputeState>;
    searchType?: Maybe<TrackingDisputeSearchType>;
    query?: Maybe<Scalars["String"]>;
    creationDateStart?: Maybe<DatetimeInput>;
    creationDateEnd?: Maybe<DatetimeInput>;
    sort?: Maybe<DisputeSort>;
};
export declare type TrackingDisputeSchema = {
    readonly __typename?: "TrackingDisputeSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly state: TrackingDisputeState;
    readonly orderId: Scalars["ObjectIdType"];
    readonly trackingId?: Maybe<Scalars["String"]>;
    readonly requestReason: Scalars["String"];
    readonly merchant: MerchantSchema;
    readonly lastUpdate?: Maybe<Datetime>;
    readonly isWishExpressLate: Scalars["Boolean"];
    readonly productId: Scalars["ObjectIdType"];
};
export declare type TrackingDisputeSearchType = "ORDER_ID";
export declare type TrackingDisputeState = "AWAITING_ADMIN" | "CANCELLED" | "AWAITING_MERCHANT" | "APPROVED" | "DECLINED";
export declare type TrackingIdFormatSchema = {
    readonly __typename?: "TrackingIDFormatSchema";
    readonly country?: Maybe<Country>;
    readonly format?: Maybe<Scalars["String"]>;
    readonly example?: Maybe<Scalars["String"]>;
};
export declare type TrackingInfoCheckpointType = "SOURCE" | "DESTINATION" | "WISHPOST_DELEGATE" | "UNKNOWN";
export declare type TrackingSourceEnum = "TRACKINGMORE" | "DHL" | "GENERIC" | "EASYPOST" | "NO_OP" | "TRACK17" | "WOSP" | "USER" | "EMS" | "AFTERSHIP" | "WISHPOST" | "CHINAPOST" | "WTS";
export declare type TrademarkCountryCode = "US" | "EU" | "CA" | "GB" | "MX" | "FR" | "CN" | "IT" | "JP" | "DE" | "SG" | "NL" | "IN" | "CH" | "AU" | "ES" | "BR" | "TR" | "AE";
export declare type TransactionPaymentType = "BRAINTREE_FB" | "UNKNOWN" | "PAYPAL" | "SHOPIFY_CHECKOUT" | "PAYTM" | "TWITTERDIRECTBUY" | "KLARNA_PAYLATER" | "NONE" | "AFFIRM" | "EBANX" | "STRIPE_SAMSUNG_PAY" | "KLARNA" | "BRAINTREE" | "PIX" | "PAYNEARME" | "BRAINTREE_ACH" | "BRAINTREE_GOOGLE" | "AFTERPAY" | "XENDIT_INVOICE" | "STRIPE" | "BRAINTREE_PAYPAL" | "OXXO" | "BOKU" | "ADYEN" | "COMMERCE_LOAN" | "OFFLINE_CASH" | "STRIPE_GOOGLE" | "FB_CHECKOUT" | "ADYEN_BANKING" | "BOLETO" | "STRIPE_APPLE_PAY" | "STRIPE_IDEAL" | "BRAINTREE_VENMO";
export declare type TrueTagSchema = {
    readonly __typename?: "TrueTagSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: Scalars["String"];
    readonly topLevel?: Maybe<TrueTagSchema>;
};
export declare type TwoFactorCodeState = "EXPIRED" | "INVALID" | "OK";
export declare type TwoFactorGenTokenInput = {
    readonly username: Scalars["String"];
    readonly isEnablingTfa?: Maybe<Scalars["Boolean"]>;
    readonly sendPhoneCall?: Maybe<Scalars["Boolean"]>;
};
export declare type TwoFactorGenTokenMutation = {
    readonly __typename?: "TwoFactorGenTokenMutation";
    readonly obfuscatedPhoneNumber?: Maybe<Scalars["String"]>;
    readonly allowTfaPhone?: Maybe<Scalars["Boolean"]>;
    readonly isMerchant?: Maybe<Scalars["Boolean"]>;
    readonly bdEmail?: Maybe<Scalars["String"]>;
    readonly isInternalEmployee?: Maybe<Scalars["Boolean"]>;
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type TwoFactorMutations = {
    readonly __typename?: "TwoFactorMutations";
    readonly sendCode: TwoFactorSendCodeMutation;
    readonly verifyCode: TwoFactorVerifyCodeMutation;
    readonly turnOn: TwoFactorTurnOnMutation;
    readonly turnOff: TwoFactorTurnOffMutation;
};
export declare type TwoFactorMutationsVerifyCodeArgs = {
    input: TwoFactorVerifyCodeInput;
};
export declare type TwoFactorMutationsTurnOnArgs = {
    input: TwoFactorTurnOnInput;
};
export declare type TwoFactorMutationsTurnOffArgs = {
    input: TwoFactorTurnOffInput;
};
export declare type TwoFactorSendCodeMutation = {
    readonly __typename?: "TwoFactorSendCodeMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly sent?: Maybe<Scalars["Boolean"]>;
    readonly sentTime?: Maybe<Datetime>;
};
export declare type TwoFactorTurnOffInput = {
    readonly code: Scalars["String"];
};
export declare type TwoFactorTurnOffMutation = {
    readonly __typename?: "TwoFactorTurnOffMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly codeState?: Maybe<TwoFactorCodeState>;
    readonly isOn?: Maybe<Scalars["Boolean"]>;
};
export declare type TwoFactorTurnOnInput = {
    readonly code: Scalars["String"];
};
export declare type TwoFactorTurnOnMutation = {
    readonly __typename?: "TwoFactorTurnOnMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly codeState?: Maybe<TwoFactorCodeState>;
    readonly isOn?: Maybe<Scalars["Boolean"]>;
    readonly backupCodes?: Maybe<ReadonlyArray<Scalars["String"]>>;
};
export declare type TwoFactorVerifyCodeInput = {
    readonly code: Scalars["String"];
};
export declare type TwoFactorVerifyCodeMutation = {
    readonly __typename?: "TwoFactorVerifyCodeMutation";
    readonly error?: Maybe<Scalars["String"]>;
    readonly codeState?: Maybe<TwoFactorCodeState>;
};
export declare type TypeOfInfringement = "TRADEMARK_INFRINGEMENT" | "COPYRIGHT" | "EU_COMMUNITY_DESIGN_VIOLATION" | "BRAND_PROTECTION" | "RIGHT_OF_PUBLICITY" | "COUNTERFEIT";
export declare type UiStateMutations = {
    readonly __typename?: "UIStateMutations";
    readonly clear: ClearUiState;
    readonly update: UpdateUiState;
    readonly clearAll: ClearAllUiState;
};
export declare type UiStateMutationsClearArgs = {
    input: UpdateUiStateInput;
};
export declare type UiStateMutationsUpdateArgs = {
    input: UpdateUiStateInput;
};
export declare type UiStateSchema = {
    readonly __typename?: "UIStateSchema";
    readonly string?: Maybe<Scalars["String"]>;
    readonly int?: Maybe<Scalars["Int"]>;
    readonly bool?: Maybe<Scalars["Boolean"]>;
    readonly stringArray?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly intArray?: Maybe<ReadonlyArray<Scalars["Int"]>>;
};
export declare type UiStateSchemaStringArgs = {
    state: UserUiState;
};
export declare type UiStateSchemaIntArgs = {
    state: UserUiState;
};
export declare type UiStateSchemaBoolArgs = {
    state: UserUiState;
};
export declare type UiStateSchemaStringArrayArgs = {
    state: UserUiState;
};
export declare type UiStateSchemaIntArrayArgs = {
    state: UserUiState;
};
export declare type UkVatInfoSchema = {
    readonly __typename?: "UKVatInfoSchema";
    readonly name: Scalars["String"];
    readonly number: Scalars["String"];
    readonly eoriNumber: Scalars["String"];
};
export declare type Union = {
    readonly __typename?: "Union";
    readonly code: Scalars["String"];
    readonly name: Scalars["String"];
    readonly countries?: Maybe<ReadonlyArray<Country>>;
};
export declare type UnionNameArgs = {
    localized?: Maybe<Scalars["Boolean"]>;
};
export declare type UpcProductSchema = {
    readonly __typename?: "UPCProductSchema";
    readonly upc: Scalars["String"];
    readonly name?: Maybe<Scalars["String"]>;
    readonly description?: Maybe<Scalars["String"]>;
    readonly variations?: Maybe<ReadonlyArray<UpcVariationSchema>>;
    readonly images?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly brandName?: Maybe<Scalars["String"]>;
};
export declare type UpcProductServiceSchema = {
    readonly __typename?: "UPCProductServiceSchema";
    readonly product?: Maybe<UpcProductSchema>;
};
export declare type UpcProductServiceSchemaProductArgs = {
    upc?: Scalars["String"];
};
export declare type UpcVariationSchema = {
    readonly __typename?: "UPCVariationSchema";
    readonly upc: Scalars["String"];
    readonly size?: Maybe<Scalars["String"]>;
    readonly color?: Maybe<Scalars["String"]>;
    readonly price?: Maybe<CurrencyValue>;
    readonly images?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly productName?: Maybe<Scalars["String"]>;
};
export declare type UpdateAuditQueueWarning = {
    readonly __typename?: "UpdateAuditQueueWarning";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpdateAuditQueueWarningInput = {
    readonly action: MerchantWarningAuditAction;
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly ids?: Maybe<ReadonlyArray<Scalars["ObjectIdType"]>>;
    readonly auditRevertReason?: Maybe<MerchantWarningAuditRevertReason>;
};
export declare type UpdateMerchantFinalSale = {
    readonly __typename?: "UpdateMerchantFinalSale";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpdateMerchantGamingReviewTicket = {
    readonly __typename?: "UpdateMerchantGamingReviewTicket";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpdateOffsiteBoost = {
    readonly __typename?: "UpdateOffsiteBoost";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpdateOrderDeliveryConfirmation = {
    readonly __typename?: "UpdateOrderDeliveryConfirmation";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type UpdateOrderDeliveryConfirmationInput = {
    readonly orderId: Scalars["ObjectIdType"];
    readonly dateDelivered: DatetimeInput;
    readonly trackingUrl?: Maybe<Scalars["String"]>;
    readonly deliveryReceiptFileUrl?: Maybe<Scalars["String"]>;
};
export declare type UpdatePayoneerSettingInput = {
    readonly personalName: Scalars["String"];
    readonly personalPhoneNumber: Scalars["String"];
    readonly personalId?: Maybe<Scalars["String"]>;
    readonly businessName?: Maybe<Scalars["String"]>;
    readonly businessId?: Maybe<Scalars["String"]>;
    readonly collectorType: MerchantPaymentCollectorType;
};
export declare type UpdatePayoneerSettingMutation = {
    readonly __typename?: "UpdatePayoneerSettingMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly newNextPayoutTime?: Maybe<Datetime>;
};
export declare type UpdatePayPalSettingInput = {
    readonly email: Scalars["String"];
    readonly personalName: Scalars["String"];
    readonly personalPhoneNumber: Scalars["String"];
    readonly personalId?: Maybe<Scalars["String"]>;
    readonly businessName?: Maybe<Scalars["String"]>;
    readonly businessId?: Maybe<Scalars["String"]>;
    readonly collectorType: MerchantPaymentCollectorType;
};
export declare type UpdatePayPalSettingMutation = {
    readonly __typename?: "UpdatePayPalSettingMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly newNextPayoutTime?: Maybe<Datetime>;
};
export declare type UpdatePermissionInput = {
    readonly id: Scalars["String"];
    readonly permission: PermissionType;
    readonly status: PermissionStatusType;
};
export declare type UpdatePermissionMutation = {
    readonly __typename?: "UpdatePermissionMutation";
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type UpdateProductLogisticsMetadata = {
    readonly __typename?: "UpdateProductLogisticsMetadata";
    readonly success: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type UpdateProductLogisticsMetadataInput = {
    readonly productId: Scalars["ObjectIdType"];
    readonly variationId?: Maybe<Scalars["ObjectIdType"]>;
    readonly packageDimensions: PackageDimensionsInput;
};
export declare type UpdateRoleInput = {
    readonly id: Scalars["String"];
    readonly role: RoleType;
    readonly assigned: Scalars["Boolean"];
};
export declare type UpdateRoleMutation = {
    readonly __typename?: "UpdateRoleMutation";
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type UpdateShippingProvider = {
    readonly __typename?: "UpdateShippingProvider";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly shippingProvider?: Maybe<ShippingProviderSchema>;
};
export declare type UpdateShippingProviderName = {
    readonly __typename?: "UpdateShippingProviderName";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly shippingProvider?: Maybe<ShippingProviderSchema>;
};
export declare type UpdateShippingProviderNameInput = {
    readonly providerId: Scalars["Int"];
    readonly name: Scalars["String"];
};
export declare type UpdateShippingSetting = {
    readonly __typename?: "UpdateShippingSetting";
    readonly ok?: Maybe<Scalars["Boolean"]>;
    readonly message?: Maybe<Scalars["String"]>;
    readonly useShopifyShippingRate?: Maybe<Scalars["Boolean"]>;
};
export declare type UpdateUiState = {
    readonly __typename?: "UpdateUIState";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpdateUiStateInput = {
    readonly state: UserUiState;
    readonly intValue?: Maybe<Scalars["Int"]>;
    readonly boolValue?: Maybe<Scalars["Boolean"]>;
    readonly stringValue?: Maybe<Scalars["String"]>;
    readonly stringArrayValue?: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly intArrayValue?: Maybe<ReadonlyArray<Scalars["Int"]>>;
};
export declare type UpdateUserInfoInput = {
    readonly id: Scalars["ObjectIdType"];
    readonly firstName?: Maybe<Scalars["String"]>;
    readonly lastName?: Maybe<Scalars["String"]>;
    readonly email?: Maybe<Scalars["String"]>;
    readonly bdMerchantCountry?: Maybe<BdMerchantCountryCodeType>;
    readonly manager?: Maybe<Scalars["ObjectIdType"]>;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
};
export declare type UpdateUserInfoMutation = {
    readonly __typename?: "UpdateUserInfoMutation";
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type UpdateUserQueuesInput = {
    readonly id: Scalars["ObjectIdType"];
    readonly queueId: Scalars["ObjectIdType"];
    readonly assigned: Scalars["Boolean"];
};
export declare type UpdateUserQueuesMutation = {
    readonly __typename?: "UpdateUserQueuesMutation";
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type UploadEuvatTaxQuestionnaire = {
    readonly __typename?: "UploadEUVATTaxQuestionnaire";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type UploadMutations = {
    readonly __typename?: "UploadMutations";
    readonly initiateUpload?: Maybe<InitiateUploadMutation>;
};
export declare type UploadMutationsInitiateUploadArgs = {
    input: InitiateUploadInput;
};
export declare type UpsertConfirmedDeliveryCarrier = {
    readonly __typename?: "UpsertConfirmedDeliveryCarrier";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertDiscountCampaignInput = {
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly name: Scalars["String"];
    readonly startTime: DatetimeInput;
    readonly endTime: DatetimeInput;
    readonly discountData?: Maybe<ReadonlyArray<VariationDiscountDataInput>>;
};
export declare type UpsertDiscountCampaignMutation = {
    readonly __typename?: "UpsertDiscountCampaignMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertLightningDealCampaignInput = {
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly name: Scalars["String"];
    readonly startTime: DatetimeInput;
    readonly endTime: DatetimeInput;
    readonly discountData?: Maybe<ReadonlyArray<VariationDiscountDataInput>>;
};
export declare type UpsertLightningDealCampaignMutation = {
    readonly __typename?: "UpsertLightningDealCampaignMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertLinkProductCompliance = {
    readonly __typename?: "UpsertLinkProductCompliance";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertMerchantSenderAddressInput = {
    readonly merchantSenderAddressId?: Maybe<Scalars["ObjectIdType"]>;
    readonly warehouseName: Scalars["String"];
    readonly address: AddressInput;
    readonly isDefault: Scalars["Boolean"];
};
export declare type UpsertMerchantSenderAddressMutation = {
    readonly __typename?: "UpsertMerchantSenderAddressMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type UpsertMerchantTaxIdentificationInput = {
    readonly address: AddressInput;
    readonly signDate: DatetimeInput;
    readonly paymentReceiverIdentity: MerchantTaxIdentificationPaymentReceiverEntity;
    readonly selfIdentityClassification: MerchantTaxIdentificationSelfIdentityClassification;
    readonly firstName?: Maybe<Scalars["String"]>;
    readonly lastName?: Maybe<Scalars["String"]>;
    readonly businessName?: Maybe<Scalars["String"]>;
    readonly businessType?: Maybe<MerchantTaxIdentificationBusinessType>;
    readonly employeeIdNumber?: Maybe<Scalars["String"]>;
    readonly foreignTaxId?: Maybe<Scalars["String"]>;
    readonly domicileExplanation?: Maybe<Scalars["String"]>;
};
export declare type UpsertMerchantTaxIdentificationMutation = {
    readonly __typename?: "UpsertMerchantTaxIdentificationMutation";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type UpsertMerchantWarehouseMutation = {
    readonly __typename?: "UpsertMerchantWarehouseMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type UpsertProduct = {
    readonly __typename?: "UpsertProduct";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly productId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type UpsertProductCategoryDispute = {
    readonly __typename?: "UpsertProductCategoryDispute";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly nextId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type UpsertProductCategoryDisputeInput = {
    readonly action: ProductCategoryDisputeAction;
    readonly productId?: Maybe<Scalars["ObjectIdType"]>;
    readonly proposedTopCategoryTagId?: Maybe<Scalars["ObjectIdType"]>;
    readonly merchantNote?: Maybe<Scalars["String"]>;
    readonly uploadFiles?: Maybe<ReadonlyArray<FileInput>>;
    readonly source?: Maybe<ProductCategoryDisputeSource>;
    readonly adminUnchangedReason?: Maybe<ProductCategoryDisputeAdminUnchangedReason>;
    readonly reason?: Maybe<ProductCategoryDisputeReason>;
    readonly adminUnchangedOtherReasonDetails?: Maybe<Scalars["String"]>;
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type UpsertProductPromotions = {
    readonly __typename?: "UpsertProductPromotions";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly maxAllowedSpending?: Maybe<CurrencyValue>;
};
export declare type UpsertProductsFromCsvFile = {
    readonly __typename?: "UpsertProductsFromCSVFile";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly jobId?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type UpsertProductsFromCsvFileInput = {
    readonly fileUrl: Scalars["String"];
    readonly columnIdList?: Maybe<ReadonlyArray<ProductCsvImportColumnId>>;
    readonly feedType: ProductCsvJobType;
};
export declare type UpsertRegulator = {
    readonly __typename?: "UpsertRegulator";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertRegulatorInput = {
    readonly action: RegulatorAction;
    readonly countryRegionCode: CountryCode;
    readonly organization: Scalars["String"];
    readonly website: Scalars["String"];
    readonly name: Scalars["String"];
    readonly emailAddress: Scalars["String"];
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly title?: Maybe<Scalars["String"]>;
};
export declare type UpsertRegulatorReport = {
    readonly __typename?: "UpsertRegulatorReport";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertRegulatorReportInput = {
    readonly action: RegulatorReportAction;
    readonly reason: RegulatorReportReason;
    readonly description: Scalars["String"];
    readonly supportingFiles: ReadonlyArray<FileInput>;
    readonly urls: ReadonlyArray<Scalars["String"]>;
    readonly emailAddress: Scalars["String"];
    readonly caseNumber?: Maybe<Scalars["String"]>;
};
export declare type UpsertResponsiblePerson = {
    readonly __typename?: "UpsertResponsiblePerson";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertRestrictedProductRequest = {
    readonly __typename?: "UpsertRestrictedProductRequest";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertShippingProfile = {
    readonly __typename?: "UpsertShippingProfile";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
};
export declare type UpsertTaxSettingsInput = {
    readonly settings: ReadonlyArray<TaxSettingsInput>;
    readonly countryOfDomicile: CountryCode;
    readonly euStandardShipFromCc?: Maybe<CountryCode>;
    readonly euWishExpressShipFromCc?: Maybe<CountryCode>;
};
export declare type UpsertTaxSettingsMutation = {
    readonly __typename?: "UpsertTaxSettingsMutation";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
};
export declare type UpsertWarehouseInput = {
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly enabledCountries?: Maybe<ReadonlyArray<CountryCode>>;
    readonly address?: Maybe<AddressInput>;
    readonly name?: Maybe<Scalars["String"]>;
};
export declare type UpsertWebhookSubscription = {
    readonly __typename?: "UpsertWebhookSubscription";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UpsertWebhookSubscriptionInput = {
    readonly subscriptionId?: Maybe<Scalars["ObjectIdType"]>;
    readonly topicId?: Maybe<Scalars["ObjectIdType"]>;
    readonly endpoint: Scalars["String"];
};
export declare type UserBackToOnboardingReason = "DORMANT" | "FAKE_NON_CN_NO_REAL_NAME" | "REVERT_REVIEW_RESULT";
export declare type UserEntityType = "COMPANY" | "INDIVIDUAL";
export declare type UserGateSchema = {
    readonly __typename?: "UserGateSchema";
    readonly isAllowed: Scalars["Boolean"];
};
export declare type UserGateSchemaIsAllowedArgs = {
    name: Scalars["String"];
};
export declare type UserMutation = {
    readonly __typename?: "UserMutation";
    readonly merchant?: Maybe<MerchantMutation>;
    readonly uiState?: Maybe<UiStateMutations>;
    readonly changeEmail?: Maybe<ChangeEmailMutation>;
    readonly password: PasswordMutations;
    readonly twoFactorAuthentication: TwoFactorMutations;
    readonly onboarding: UserOnboardingMutations;
    readonly changePhoneNumber: ChangePhoneNumberMutation;
    readonly deleteDevice: DeleteDeviceMutation;
    readonly deleteAllDevices: DeleteAllDevicesMutation;
    readonly changeLocale: ChangeLocaleMutation;
};
export declare type UserMutationChangeEmailArgs = {
    input: ChangeEmailInput;
};
export declare type UserMutationDeleteDeviceArgs = {
    input: DeleteDeviceInput;
};
export declare type UserMutationChangeLocaleArgs = {
    input: ChangeLocaleInput;
};
export declare type UserOnboardingAboutBusinessInfo = {
    readonly onboardingExistingSellingLocations: ExistingSellingLocations;
    readonly onboardingMerchantSellerAge: Scalars["String"];
    readonly onboardingAnnualRevenueRange: Scalars["String"];
    readonly onboardingSkuQuantity: Scalars["Int"];
    readonly onboardingProductCategory: Scalars["String"];
    readonly onboardingWishLocalInterested?: Maybe<Scalars["Boolean"]>;
    readonly existingStoreUrl?: Maybe<Scalars["String"]>;
    readonly onboardingTopPerformingWebsite?: Maybe<Scalars["String"]>;
    readonly onboardingHasErpPartners?: Maybe<Scalars["Boolean"]>;
};
export declare type UserOnboardingAccountSetup = {
    readonly firstName: Scalars["String"];
    readonly lastName: Scalars["String"];
    readonly email?: Maybe<Scalars["String"]>;
    readonly storeName?: Maybe<Scalars["String"]>;
};
export declare type UserOnboardingAccountSetupMutation = {
    readonly __typename?: "UserOnboardingAccountSetupMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UserOnboardingBusinessInfo = {
    readonly onboardingBusinessRegistrationName?: Maybe<Scalars["String"]>;
    readonly onboardingBusinessRegistrationNumber?: Maybe<Scalars["Int"]>;
    readonly streetAddress1: Scalars["String"];
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly state?: Maybe<Scalars["String"]>;
    readonly zipcode: Scalars["String"];
    readonly country: CountryCode;
    readonly countryOfDomicile?: Maybe<CountryCode>;
};
export declare type UserOnboardingContactInfo = {
    readonly firstName: Scalars["String"];
    readonly lastName: Scalars["String"];
    readonly streetAddress1: Scalars["String"];
    readonly streetAddress2?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly state?: Maybe<Scalars["String"]>;
    readonly zipcode: Scalars["String"];
    readonly country: CountryCode;
    readonly phoneNumber: Scalars["String"];
};
export declare type UserOnboardingMutations = {
    readonly __typename?: "UserOnboardingMutations";
    readonly setContactInfo?: Maybe<UserOnboardingSetContactInfoMutation>;
    readonly setAboutBusinessInfo?: Maybe<UserOnboardingSetAboutBusinessInfoMutation>;
    readonly setBusinessInfo?: Maybe<UserOnboardingSetBusinessInfoMutation>;
    readonly setAccountInfo?: Maybe<UserOnboardingAccountSetupMutation>;
    readonly verifyPhoneNumber?: Maybe<UserOnboardingVerifyPhoneNumberMutation>;
};
export declare type UserOnboardingMutationsSetContactInfoArgs = {
    input: UserOnboardingContactInfo;
};
export declare type UserOnboardingMutationsSetAboutBusinessInfoArgs = {
    input: UserOnboardingAboutBusinessInfo;
};
export declare type UserOnboardingMutationsSetBusinessInfoArgs = {
    input: UserOnboardingBusinessInfo;
};
export declare type UserOnboardingMutationsSetAccountInfoArgs = {
    input: UserOnboardingAccountSetup;
};
export declare type UserOnboardingMutationsVerifyPhoneNumberArgs = {
    input: UserOnboardingVerifyPhoneNumber;
};
export declare type UserOnboardingSetAboutBusinessInfoMutation = {
    readonly __typename?: "UserOnboardingSetAboutBusinessInfoMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UserOnboardingSetBusinessInfoMutation = {
    readonly __typename?: "UserOnboardingSetBusinessInfoMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UserOnboardingSetContactInfoMutation = {
    readonly __typename?: "UserOnboardingSetContactInfoMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UserOnboardingVerifyPhoneNumber = {
    readonly phoneNumber: Scalars["String"];
    readonly byPhoneCall?: Maybe<Scalars["Boolean"]>;
    readonly verificationCode?: Maybe<Scalars["String"]>;
};
export declare type UserOnboardingVerifyPhoneNumberMutation = {
    readonly __typename?: "UserOnboardingVerifyPhoneNumberMutation";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type UserSchema = {
    readonly __typename?: "UserSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name?: Maybe<Scalars["String"]>;
    readonly lastName?: Maybe<Scalars["String"]>;
    readonly firstName?: Maybe<Scalars["String"]>;
    readonly email: Scalars["String"];
    readonly confirmEmailPath?: Maybe<Scalars["String"]>;
    readonly merchantId?: Maybe<Scalars["ObjectIdType"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly canEditPhoneNumber: Scalars["Boolean"];
    readonly canHandleEscalatedMerchantGamingReview: Scalars["Boolean"];
    readonly twoFactorEnabled: Scalars["Boolean"];
    readonly businessAddress?: Maybe<AddressSchema>;
    readonly isStoreOrMerchantUser: Scalars["Boolean"];
    readonly onboarding?: Maybe<OnboardingSchema>;
    readonly uiState?: Maybe<UiStateSchema>;
    readonly alerts?: Maybe<ReadonlyArray<AlertSchema>>;
    readonly isNewNav?: Maybe<Scalars["Boolean"]>;
    readonly username: Scalars["String"];
    readonly accountManager?: Maybe<UserSchema>;
    readonly numCurrentDevices?: Maybe<Scalars["Int"]>;
    readonly currentDevices: ReadonlyArray<DeviceSchema>;
    readonly canAcceptMerchantTos: Scalars["Boolean"];
    readonly gating: UserGateSchema;
    readonly todo: TodoSchema;
    readonly tfaTokenSentTime?: Maybe<Datetime>;
    readonly entityType?: Maybe<UserEntityType>;
    readonly isAdmin: Scalars["Boolean"];
    readonly isOnCsTeam: Scalars["Boolean"];
    readonly hasPermission: Scalars["Boolean"];
    readonly hasTfaBackupCodes: Scalars["Boolean"];
    readonly companyName?: Maybe<Scalars["String"]>;
    readonly displayName?: Maybe<Scalars["String"]>;
    readonly permissions?: Maybe<ReadonlyArray<PermissionSchema>>;
    readonly roles?: Maybe<ReadonlyArray<RoleSchema>>;
    readonly bdMerchantCountry?: Maybe<BdMerchantCountryCodeType>;
    readonly manager?: Maybe<UserSchema>;
    readonly isEnabled: Scalars["Boolean"];
    readonly isSalesRep: Scalars["Boolean"];
    readonly hasSeenFbwTos: Scalars["Boolean"];
    readonly serviceTypes?: Maybe<ReadonlyArray<UserServiceType>>;
    readonly possibleManagers?: Maybe<ReadonlyArray<UserSchema>>;
    readonly queues?: Maybe<ReadonlyArray<LogicalQueueSchema>>;
    readonly backToOnboardingReason?: Maybe<UserBackToOnboardingReason>;
    readonly utmSource?: Maybe<Scalars["String"]>;
    readonly qqGroupNumber?: Maybe<Scalars["String"]>;
    readonly onboardingUrl?: Maybe<Scalars["String"]>;
    readonly factoryManager?: Maybe<UserSchema>;
};
export declare type UserSchemaCurrentDevicesArgs = {
    limit?: Maybe<Scalars["Int"]>;
    skip?: Maybe<Scalars["Int"]>;
};
export declare type UserSchemaHasPermissionArgs = {
    permissions: ReadonlyArray<PermissionType>;
};
export declare type UserSchemaPermissionsArgs = {
    status: PermissionStatusType;
};
export declare type UserSchemaQueuesArgs = {
    assigned?: Maybe<Scalars["Boolean"]>;
};
export declare type UserSchemaOnboardingUrlArgs = {
    currentUrlPath: Scalars["String"];
};
export declare type UserServiceType = "TICKET" | "EMAIL" | "TAGGING";
export declare type UsersSortFieldType = "USERNAME" | "ID" | "EMAIL";
export declare type UserUiState = "PREFERS_OLD_NAV" | "DISMISSED_FULFILLMENT_SLA_INSIGHT" | "DISMISSED_FULFILLMENT_PENALTY_INSIGHT" | "DISMISSED_HOW_TO_FULFILL_INSIGHT" | "HAS_COMPLETED_CS_SURVEY" | "STORE_TIME_SEEN_SELL_ON_WISH_BANNER" | "HAS_SEEN_KYC_VERIFICATION_SUCCESS_MESSAGE" | "DISMISSED_KYC_VERIFICATION_INTRO_BANNER" | "DISMISSED_WISH_EXPRESS_INTRO_BANNER" | "PREFERS_NEW_NAV" | "FULFILLMENT_MOST_RECENT_ORIGIN_COUNTRIES" | "DISMISSED_SWITCH_NAV_BACK_TUTORIAL" | "DISMISSED_SELLER_VERIFICATION_INTRO_BANNER" | "HAS_SEEN_SELLER_VERIFICATION_SUCCESS_MESSAGE" | "FULFILLMENT_MOST_RECENT_SHIPPING_PROVIDERS";
export declare type UsTaxConstants = {
    readonly __typename?: "USTaxConstants";
    readonly marketplaceStates: ReadonlyArray<Scalars["String"]>;
    readonly marketplaceMunicipalities: ReadonlyArray<UsTaxMarketplaceMunicipalities>;
    readonly nomadStates: ReadonlyArray<Scalars["String"]>;
    readonly homeRuleStates: ReadonlyArray<Scalars["String"]>;
};
export declare type UsTaxMarketplaceMunicipalities = {
    readonly __typename?: "USTaxMarketplaceMunicipalities";
    readonly stateCode: Scalars["String"];
    readonly cities: ReadonlyArray<Scalars["String"]>;
    readonly counties: ReadonlyArray<Scalars["String"]>;
    readonly districts: ReadonlyArray<Scalars["String"]>;
};
export declare type VacationSchema = {
    readonly __typename?: "VacationSchema";
    readonly startDate?: Maybe<Datetime>;
    readonly endDate?: Maybe<Datetime>;
    readonly isActive: Scalars["Boolean"];
    readonly vacationStatus?: Maybe<CommerceMerchantState>;
};
export declare type VariationDimensions = {
    readonly __typename?: "VariationDimensions";
    readonly length: Length;
    readonly width: Length;
    readonly height: Length;
};
export declare type VariationDiscountDataInput = {
    readonly productId: Scalars["ObjectIdType"];
    readonly variationId: Scalars["ObjectIdType"];
    readonly discountPercentage: Scalars["Float"];
    readonly maxQuantity: Scalars["Int"];
    readonly maxDiscount: CurrencyInput;
};
export declare type VariationInput = {
    readonly id?: Maybe<Scalars["ObjectIdType"]>;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly sku?: Maybe<Scalars["String"]>;
    readonly inventory?: Maybe<ReadonlyArray<InventoryInput>>;
    readonly price?: Maybe<CurrencyInput>;
    readonly cost?: Maybe<CurrencyInput>;
    readonly size?: Maybe<Scalars["String"]>;
    readonly color?: Maybe<Scalars["String"]>;
    readonly gtin?: Maybe<Scalars["String"]>;
    readonly originCountry?: Maybe<CountryCode>;
    readonly declaredValue?: Maybe<CurrencyInput>;
    readonly declaredName?: Maybe<Scalars["String"]>;
    readonly declaredLocalName?: Maybe<Scalars["String"]>;
    readonly pieces?: Maybe<Scalars["Int"]>;
    readonly image?: Maybe<ImageInput>;
    readonly weight?: Maybe<WeightInput>;
    readonly height?: Maybe<LengthInput>;
    readonly length?: Maybe<LengthInput>;
    readonly width?: Maybe<LengthInput>;
    readonly hasPowder?: Maybe<Scalars["Boolean"]>;
    readonly hasLiquid?: Maybe<Scalars["Boolean"]>;
    readonly hasBattery?: Maybe<Scalars["Boolean"]>;
    readonly hasMetal?: Maybe<Scalars["Boolean"]>;
    readonly customsHsCode?: Maybe<Scalars["String"]>;
    readonly quantityWeight?: Maybe<WeightInput>;
    readonly quantityLength?: Maybe<LengthInput>;
    readonly quantityVolume?: Maybe<VolumeInput>;
    readonly quantityArea?: Maybe<AreaInput>;
    readonly quantityUnit?: Maybe<CountInput>;
};
export declare type VariationSchema = {
    readonly __typename?: "VariationSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly sku: Scalars["String"];
    readonly size?: Maybe<Scalars["String"]>;
    readonly color?: Maybe<Scalars["String"]>;
    readonly productId: Scalars["String"];
    readonly weight?: Maybe<Weight>;
    readonly height?: Maybe<Length>;
    readonly length?: Maybe<Length>;
    readonly width?: Maybe<Length>;
    readonly customsHsCode?: Maybe<Scalars["String"]>;
    readonly gtin?: Maybe<Scalars["String"]>;
    readonly originCountry?: Maybe<Country>;
    readonly declaredValue?: Maybe<CurrencyValue>;
    readonly declaredName?: Maybe<Scalars["String"]>;
    readonly declaredLocalName?: Maybe<Scalars["String"]>;
    readonly pieces?: Maybe<Scalars["Int"]>;
    readonly hasPowder?: Maybe<Scalars["Boolean"]>;
    readonly hasLiquid?: Maybe<Scalars["Boolean"]>;
    readonly hasBattery?: Maybe<Scalars["Boolean"]>;
    readonly hasMetal?: Maybe<Scalars["Boolean"]>;
    readonly inventory: ReadonlyArray<InventorySchema>;
    readonly fbwInventory: ReadonlyArray<FbwInventorySchema>;
    readonly price: CurrencyValue;
    readonly msrp?: Maybe<CurrencyValue>;
    readonly image?: Maybe<ImageSchema>;
    readonly enabled?: Maybe<Scalars["Boolean"]>;
    readonly totalInventory?: Maybe<Scalars["Int"]>;
    readonly productName: Scalars["String"];
    readonly logisticsMetadata: LogisticsMetadataSchema;
    readonly quantityWeight?: Maybe<Weight>;
    readonly quantityLength?: Maybe<Length>;
    readonly quantityVolume?: Maybe<Volume>;
    readonly quantityArea?: Maybe<Area>;
    readonly quantityUnit?: Maybe<Count>;
};
export declare type VariationSchemaTotalInventoryArgs = {
    shippingType?: Maybe<WarehouseShippingType>;
};
export declare type VariationSearchType = "PRODUCT_ID" | "PRODUCT_NAME" | "SKU";
export declare type VariationSort = {
    readonly field: VariationSortField;
    readonly order: SortOrderType;
};
export declare type VariationSortField = "ID" | "INVENTORY" | "SKU";
export declare type VideoCaptionSpec = {
    readonly text: Scalars["String"];
    readonly location: ScreenCoordinates;
};
export declare type VideoMotion = "UNKNOWN_ANIMATION" | "SLOW_EXPAND" | "PAN_LEFT" | "PAN_RIGHT";
export declare type VideoMutations = {
    readonly __typename?: "VideoMutations";
    readonly generateVideo?: Maybe<GenerateVideoMutation>;
    readonly posts?: Maybe<ProductPostsMutations>;
};
export declare type VideoMutationsGenerateVideoArgs = {
    input: GenerateVideoInput;
};
export declare type VideoQualityLevel = "UNKNOWN_LEVEL" | "AVERAGE" | "GOOD" | "BAD";
export declare type VideoSlideSpec = {
    readonly inputUrl: Scalars["String"];
    readonly isVideo: Scalars["Boolean"];
    readonly caption: VideoCaptionSpec;
    readonly duration: Scalars["Int"];
    readonly imageMotion?: Maybe<VideoMotion>;
};
export declare type ViewTermsOfService = {
    readonly __typename?: "ViewTermsOfService";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ViewTermsOfServiceById = {
    readonly __typename?: "ViewTermsOfServiceById";
    readonly ok: Scalars["Boolean"];
    readonly message?: Maybe<Scalars["String"]>;
};
export declare type ViewTermsOfServiceByIdInput = {
    readonly tosId: Scalars["ObjectIdType"];
};
export declare type Volume = {
    readonly __typename?: "Volume";
    readonly value: Scalars["Float"];
    readonly unit: VolumeUnit;
};
export declare type VolumeValueArgs = {
    targetUnit?: Maybe<VolumeUnit>;
};
export declare type VolumeInput = {
    readonly value: Scalars["Float"];
    readonly unit: VolumeUnit;
};
export declare type VolumeUnit = "LITER" | "CENTILITER" | "CUBICMETER" | "FLUID_OUNCE" | "GALLON" | "MILLILITER" | "PINT" | "QUART";
export declare type WarehouseCountryShippingInput = {
    readonly shippingType: WarehouseShippingType;
    readonly countryShipping?: Maybe<ReadonlyArray<CountryShippingInput>>;
};
export declare type WarehouseCountryShippingSchema = {
    readonly __typename?: "WarehouseCountryShippingSchema";
    readonly shippingType: WarehouseShippingType;
    readonly countryShipping?: Maybe<ReadonlyArray<CountryShippingSchema>>;
};
export declare type WarehouseShippingType = "MERCHANT_TTD_13_DAY" | "REGULAR" | "MERCHANT_TTD_40_DAY" | "MERCHANT_TTD_38_DAY" | "MERCHANT_TTD_3_DAY" | "MERCHANT_TTD_17_DAY" | "MERCHANT_TTD_20_DAY" | "MERCHANT_TTD_7_DAY" | "MERCHANT_TTD_35_DAY" | "MERCHANT_TTD_44_DAY" | "MERCHANT_TTD_23_DAY" | "WISH_EXPRESS_2_DAY" | "MERCHANT_TTD_27_DAY" | "FBW_V1_WLC" | "WISH_EXPRESS" | "MERCHANT_TTD_19_DAY" | "MERCHANT_TTD_9_DAY" | "WISH_BLUE" | "MERCHANT_TTD_15_DAY" | "MERCHANT_TTD_25_DAY" | "MERCHANT_TTD_31_DAY" | "FBW_V2_REGULAR" | "MERCHANT_TTD_11_DAY" | "MERCHANT_TTD_16_DAY" | "MERCHANT_TTD_33_DAY" | "MERCHANT_TTD_21_DAY" | "MERCHANT_TTD_12_DAY" | "MERCHANT_TTD_42_DAY" | "MERCHANT_TTD_4_DAY" | "MERCHANT_TTD_41_DAY" | "FBW_V2" | "MERCHANT_TTD_45_DAY" | "MERCHANT_TTD_37_DAY" | "FBW_V1" | "MERCHANT_TTD_39_DAY" | "MERCHANT_TTD_2_DAY" | "MERCHANT_TTD_22_DAY" | "MERCHANT_TTD_18_DAY" | "MERCHANT_TTD_34_DAY" | "WISH_EXPRESS_7_DAY" | "FBW_V2_CALCULATED" | "MERCHANT_TTD_30_DAY" | "MERCHANT_TTD_10_DAY" | "FBW_V2_EXPRESS" | "MERCHANT_TTD_43_DAY" | "MERCHANT_TTD_32_DAY" | "MERCHANT_TTD_26_DAY" | "MERCHANT_TTD_14_DAY" | "WAIT_AND_SAVE" | "MERCHANT_TTD_6_DAY" | "MERCHANT_TTD_8_DAY" | "MERCHANT_TTD_24_DAY" | "MERCHANT_TTD_36_DAY" | "MERCHANT_TTD_28_DAY" | "MERCHANT_TTD_5_DAY" | "MERCHANT_TTD_29_DAY" | "MERCHANT_TTD_1_DAY";
export declare type WarehouseVerificationRequestSchema = {
    readonly __typename?: "WarehouseVerificationRequestSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly documentUrls: ReadonlyArray<Scalars["String"]>;
    readonly submitTime: Datetime;
    readonly reviewTime?: Maybe<Datetime>;
    readonly reviewerComment?: Maybe<Scalars["String"]>;
};
export declare type WarehouseVerificationState = "VERIFIED" | "REJECTED" | "PENDING_VERIFICATION" | "INELIGIBLE" | "UNSET" | "UNVERIFIED";
export declare type WebhookApiVersion = "V3";
export declare type WebhookMutations = {
    readonly __typename?: "WebhookMutations";
    readonly upsertSubscription?: Maybe<UpsertWebhookSubscription>;
    readonly deleteSubscription?: Maybe<DeleteWebhookSubscription>;
    readonly sendTestMessage?: Maybe<SendTestMessage>;
};
export declare type WebhookMutationsUpsertSubscriptionArgs = {
    input: UpsertWebhookSubscriptionInput;
};
export declare type WebhookMutationsDeleteSubscriptionArgs = {
    input: DeleteWebhookSubscriptionInput;
};
export declare type WebhookMutationsSendTestMessageArgs = {
    input: SendTestMessageInput;
};
export declare type WebhookSchema = {
    readonly __typename?: "WebhookSchema";
    readonly topics: ReadonlyArray<WebhookTopicSchema>;
    readonly subscriptions?: Maybe<ReadonlyArray<WebhookSubscriptionSchema>>;
    readonly allowWebhookUi: Scalars["Boolean"];
};
export declare type WebhookSchemaTopicsArgs = {
    apiVersion?: Maybe<WebhookApiVersion>;
};
export declare type WebhookSubscriptionInput = {
    readonly id: Scalars["ObjectIdType"];
    readonly topic: WebhookTopicInput;
    readonly endpoint: Scalars["String"];
    readonly endpointType: SubscriptionEndpointType;
};
export declare type WebhookSubscriptionSchema = {
    readonly __typename?: "WebhookSubscriptionSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly topic: WebhookTopicSchema;
    readonly endpoint: Scalars["String"];
    readonly deactivated: Scalars["Boolean"];
    readonly deactivateReasonBrief?: Maybe<Scalars["String"]>;
    readonly deactivateReasonDetail?: Maybe<Scalars["String"]>;
};
export declare type WebhookTopicInput = {
    readonly id: Scalars["ObjectIdType"];
    readonly name: WebhookTopicName;
    readonly apiVersion: WebhookApiVersion;
};
export declare type WebhookTopicName = "ORDER_ALL" | "ORDER_RELEASE" | "ORDER_FULFILLMENT_DEADLINE" | "ORDER_ADDRESS_CHANGE" | "ORDER_PENALTY" | "ORDER_TRACKING_UPDATE" | "ORDER_REFUND" | "ORDER_TAX" | "POLICY_PENALTY_ISSUE" | "POLICY_PENALTY_REVERSE" | "POLICY_PENALTY_CANCEL" | "TICKET_AWAITING_MERCHANT" | "PRODUCT_BOOST_CAMPAIGN_STATS_UPDATE" | "PRODUCT_BOOST_CAMPAIGN_CREATION" | "PRODUCT_BOOST_CAMPAIGN_ATTRIBUTE_UPDATE" | "PRODUCT_BOOST_CAMPAIGN_PRODUCT_STATS_UPDATE" | "PRODUCT_BOOST_CAMPAIGN_PRODUCT_LOW_PERFORMANCE" | "PRODUCT_BOOST_TRENDING_CATEGORIES" | "PRODUCT_BOOST_ACCOUNT_BALANCE_UPDATE" | "PRODUCT_UPDATE_MERCHANT" | "PRODUCT_IMAGE_JOB_STATUS_UPDATE" | "PRODUCT_TAGGING_UPDATE" | "PRODUCT_INVENTORY_CHANGE_WISH_USER" | "PRODUCT_INVENTORY_CHANGE_MERCHANT";
export declare type WebhookTopicSchema = {
    readonly __typename?: "WebhookTopicSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: WebhookTopicName;
    readonly apiVersion: WebhookApiVersion;
};
export declare type WechatCheckScanInput = {
    readonly qrTicket: Scalars["String"];
};
export declare type WechatCheckScanMutation = {
    readonly __typename?: "WechatCheckScanMutation";
    readonly expireIn?: Maybe<Scalars["Int"]>;
    readonly scanned?: Maybe<Scalars["Boolean"]>;
    readonly ok: Scalars["Boolean"];
    readonly error?: Maybe<Scalars["String"]>;
};
export declare type Weight = {
    readonly __typename?: "Weight";
    readonly value: Scalars["Float"];
    readonly unit: WeightUnit;
};
export declare type WeightValueArgs = {
    targetUnit?: Maybe<WeightUnit>;
};
export declare type WeightInput = {
    readonly value: Scalars["Float"];
    readonly unit: WeightUnit;
};
export declare type WeightUnit = "GRAM" | "KILOGRAM" | "MILLIGRAM" | "OUNCE" | "POUND";
export declare type WfpMutations = {
    readonly __typename?: "WFPMutations";
    readonly cancelWfpWithhold?: Maybe<CancelWfpWithholdMutation>;
};
export declare type WfpMutationsCancelWfpWithholdArgs = {
    input: CancelWfpWithholdMutationInput;
};
export declare type WfpOrderDeliveryState = "LATE" | "SIGNIFICANTLY_LATE" | "UNKNOWN" | "ON_TIME" | "NOT_DELIVERED";
export declare type WfpWithholdReasonCategory = "DELIVERED_SIGNIFICANTLY_LATE" | "WISH_EXPRESS_LATE_DELIVERY" | "HIGH_STORAGE_DEVICES" | "HIGH_WAREHOUSE_LATE_DELIVERY_RATE";
export declare type WfpWithholdReasonSchema = {
    readonly __typename?: "WFPWithholdReasonSchema";
    readonly reason: WfpWithholdReasonCategory;
    readonly lateDeliveryDetail?: Maybe<LateDeliverySchema>;
};
export declare type WishCompanyInfo = {
    readonly __typename?: "WishCompanyInfo";
    readonly hqAddress: AddressSchema;
    readonly companyOperatorName: Scalars["String"];
};
export declare type WishEuvatPayerInfo = {
    readonly __typename?: "WishEUVATPayerInfo";
    readonly address: AddressSchema;
    readonly iossNumber: Scalars["String"];
};
export declare type WishExpressCountryDetails = {
    readonly __typename?: "WishExpressCountryDetails";
    readonly supportsWishExpress: Scalars["Boolean"];
    readonly expectedTimeToDoor?: Maybe<Scalars["Int"]>;
};
export declare type WishExpressInfoSchema = {
    readonly __typename?: "WishExpressInfoSchema";
    readonly fulfillmentDeadline: Timedelta;
};
export declare type WishPostShippingUpdatesSchema = {
    readonly __typename?: "WishPostShippingUpdatesSchema";
    readonly orderId: Scalars["ObjectIdType"];
    readonly amount: CurrencyValue;
    readonly date: Datetime;
    readonly paymentDate?: Maybe<Datetime>;
    readonly reason: Scalars["String"];
};
export declare type WishSellerStandardStats = {
    readonly __typename?: "WishSellerStandardStats";
    readonly maturedOrderCount: Scalars["Int"];
    readonly userRating: Scalars["Float"];
    readonly orderFultillmentRate: Scalars["Float"];
    readonly validTrackingRate: Scalars["Float"];
    readonly productQualityRefundRate: Scalars["Float"];
    readonly productLogisticsRefundRate: Scalars["Float"];
    readonly fulfillmentSpeed: Timedelta;
    readonly misleadingTrackingCount: Scalars["Int"];
    readonly prohibitedProductCount: Scalars["Int"];
    readonly misleadingListingCount: Scalars["Int"];
    readonly ipViolationProductCount: Scalars["Int"];
    readonly repeatIpInfractionCount: Scalars["Int"];
    readonly materialListingChangeCount: Scalars["Int"];
};
export declare type WishUserSchema = {
    readonly __typename?: "WishUserSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: Scalars["String"];
    readonly email?: Maybe<Scalars["String"]>;
    readonly signupMethod?: Maybe<WishUserSignupMethod>;
    readonly isVerified?: Maybe<Scalars["Boolean"]>;
    readonly emailBouncedReason?: Maybe<Scalars["String"]>;
};
export declare type WishUserSignupMethod = "GOOGLE_PLUS" | "FACEBOOK" | "APPLE" | "EMAIL";
export declare type WpsAdditionalTrackingService = {
    readonly __typename?: "WPSAdditionalTrackingService";
    readonly type: WpsAvailableServices;
    readonly name: Scalars["String"];
    readonly fee?: Maybe<CurrencyValue>;
};
export declare type WpsAvailableServices = "SATURDAY_DELIVERY" | "ADDITIONAL_HANDLING" | "BASE_SERVICE" | "SIGNATURE_REQUIRED";
export declare type WpsFee = {
    readonly __typename?: "WPSFee";
    readonly totalFee: CurrencyValue;
    readonly itemizedCharges: ReadonlyArray<WpsItemizedCharge>;
};
export declare type WpsFeeAdjustment = {
    readonly __typename?: "WPSFeeAdjustment";
    readonly creationDate: Datetime;
    readonly amount: CurrencyValue;
    readonly paymentId?: Maybe<Scalars["ObjectIdType"]>;
    readonly paymentProcessedDate?: Maybe<Datetime>;
    readonly reason?: Maybe<Scalars["String"]>;
};
export declare type WpsFulfillmentInfoSchema = {
    readonly __typename?: "WPSFulfillmentInfoSchema";
    readonly shippingOptionId?: Maybe<Scalars["ObjectIdType"]>;
    readonly shippingLabelDownloadLink?: Maybe<Scalars["String"]>;
    readonly shipmentFee: WpsFee;
    readonly shipmentState: WpsShipmentState;
    readonly purchaseDate?: Maybe<Datetime>;
    readonly paymentId?: Maybe<Scalars["ObjectIdType"]>;
    readonly paymentProcessedDate?: Maybe<Datetime>;
    readonly feeAdjustments?: Maybe<ReadonlyArray<WpsFeeAdjustment>>;
};
export declare type WpsGetShippingOptionsSchema = {
    readonly __typename?: "WPSGetShippingOptionsSchema";
    readonly ok: Scalars["Boolean"];
    readonly errorMessage?: Maybe<Scalars["String"]>;
    readonly shippingOptions?: Maybe<ReadonlyArray<WpsShippingOptionSchema>>;
};
export declare type WpsItemizedCharge = {
    readonly __typename?: "WPSItemizedCharge";
    readonly type: WpsAvailableServices;
    readonly name: Scalars["String"];
    readonly fee: CurrencyValue;
};
export declare type WpsPackageType = "BOX" | "ENVELOPE";
export declare type WpsShipmentState = "ORDER_STATE_UPLOADED" | "ADJUSTED" | "COMPLETE" | "CREATED" | "REFUNDED" | "PAID" | "CANCELLATION_PENDING" | "FAILED" | "ADJUSTMENT_PENDING" | "CANCELLED" | "PAYMENT_PENDING" | "REFUND_PENDING" | "EXPIRED";
export declare type WpsShippingOptionSchema = {
    readonly __typename?: "WPSShippingOptionSchema";
    readonly id: Scalars["ObjectIdType"];
    readonly name: Scalars["String"];
    readonly price: CurrencyValue;
    readonly provider: WpsShippingProviderSchema;
    readonly daysToDeliver: Scalars["Int"];
    readonly maxDaysToDeliver: Scalars["Int"];
    readonly minDaysToDeliver: Scalars["Int"];
    readonly includesTracking: Scalars["Boolean"];
    readonly isRegistered: Scalars["Boolean"];
    readonly availableAdditionalServiceOptions: ReadonlyArray<WpsAdditionalTrackingService>;
};
export declare type WpsShippingProviderSchema = {
    readonly __typename?: "WPSShippingProviderSchema";
    readonly id: Scalars["String"];
    readonly name: Scalars["String"];
    readonly wpsId: Scalars["ObjectIdType"];
};
export declare type WpsTermsTypeEnum = "UPS" | "WPS";
export declare type WssMerchantLevelType = "PLATINUM" | "GOLD" | "BAN" | "UNASSESSED" | "SILVER" | "BRONZE";
//# sourceMappingURL=mdTypes.d.ts.map