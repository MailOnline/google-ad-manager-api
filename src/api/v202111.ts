
import { resolve as resolvePath } from 'node:path'
import { JWT, JWTOptions } from 'google-auth-library'
import { BearerSecurity, Client, createClientAsync } from 'soap'
import { createClientAsync as createActivityGroupServiceClient } from '../service/v202111/activitygroupservice'
import { createClientAsync as createActivityServiceClient } from '../service/v202111/activityservice'
import { createClientAsync as createAdExclusionRuleServiceClient } from '../service/v202111/adexclusionruleservice'
import { createClientAsync as createAdRuleServiceClient } from '../service/v202111/adruleservice'
import { createClientAsync as createAdjustmentServiceClient } from '../service/v202111/adjustmentservice'
import { createClientAsync as createAudienceSegmentServiceClient } from '../service/v202111/audiencesegmentservice'
import { createClientAsync as createCdnConfigurationServiceClient } from '../service/v202111/cdnconfigurationservice'
import { createClientAsync as createCmsMetadataServiceClient } from '../service/v202111/cmsmetadataservice'
import { createClientAsync as createCompanyServiceClient } from '../service/v202111/companyservice'
import { createClientAsync as createContactServiceClient } from '../service/v202111/contactservice'
import { createClientAsync as createContentBundleServiceClient } from '../service/v202111/contentbundleservice'
import { createClientAsync as createContentServiceClient } from '../service/v202111/contentservice'
import { createClientAsync as createCreativeReviewServiceClient } from '../service/v202111/creativereviewservice'
import { createClientAsync as createCreativeServiceClient } from '../service/v202111/creativeservice'
import { createClientAsync as createCreativeSetServiceClient } from '../service/v202111/creativesetservice'
import { createClientAsync as createCreativeTemplateServiceClient } from '../service/v202111/creativetemplateservice'
import { createClientAsync as createCreativeWrapperServiceClient } from '../service/v202111/creativewrapperservice'
import { createClientAsync as createCustomFieldServiceClient } from '../service/v202111/customfieldservice'
import { createClientAsync as createCustomTargetingServiceClient } from '../service/v202111/customtargetingservice'
import { createClientAsync as createDaiAuthenticationKeyServiceClient } from '../service/v202111/daiauthenticationkeyservice'
import { createClientAsync as createDaiEncodingProfileServiceClient } from '../service/v202111/daiencodingprofileservice'
import { createClientAsync as createForecastServiceClient } from '../service/v202111/forecastservice'
import { createClientAsync as createInventoryServiceClient } from '../service/v202111/inventoryservice'
import { createClientAsync as createLabelServiceClient } from '../service/v202111/labelservice'
import { createClientAsync as createLineItemCreativeAssociationServiceClient } from '../service/v202111/lineitemcreativeassociationservice'
import { createClientAsync as createLineItemServiceClient } from '../service/v202111/lineitemservice'
import { createClientAsync as createLineItemTemplateServiceClient } from '../service/v202111/lineitemtemplateservice'
import { createClientAsync as createLiveStreamEventServiceClient } from '../service/v202111/livestreameventservice'
import { createClientAsync as createMobileApplicationServiceClient } from '../service/v202111/mobileapplicationservice'
import { createClientAsync as createNativeStyleServiceClient } from '../service/v202111/nativestyleservice'
import { createClientAsync as createNetworkServiceClient } from '../service/v202111/networkservice'
import { createClientAsync as createOrderServiceClient } from '../service/v202111/orderservice'
import { createClientAsync as createPlacementServiceClient } from '../service/v202111/placementservice'
import { createClientAsync as createProposalLineItemServiceClient } from '../service/v202111/proposallineitemservice'
import { createClientAsync as createProposalServiceClient } from '../service/v202111/proposalservice'
import { createClientAsync as createPublisherQueryLanguageServiceClient } from '../service/v202111/publisherquerylanguageservice'
import { createClientAsync as createReportServiceClient } from '../service/v202111/reportservice'
import { createClientAsync as createSiteServiceClient } from '../service/v202111/siteservice'
import { createClientAsync as createStreamActivityMonitorServiceClient } from '../service/v202111/streamactivitymonitorservice'
import { createClientAsync as createSuggestedAdUnitServiceClient } from '../service/v202111/suggestedadunitservice'
import { createClientAsync as createTargetingPresetServiceClient } from '../service/v202111/targetingpresetservice'
import { createClientAsync as createTeamServiceClient } from '../service/v202111/teamservice'
import { createClientAsync as createUserServiceClient } from '../service/v202111/userservice'
import { createClientAsync as createUserTeamAssociationServiceClient } from '../service/v202111/userteamassociationservice'


export interface GoogleAdManagerOptions {
  applicationName: string
  jwtOptions: JWTOptions
  networkCode: number | string
}

export class GoogleAdManager {
  #applicationName: string
  #jwt: JWT
  #networkCode: string
  #version = 'v202111'

  get version() { return this.#version }

  constructor(options: GoogleAdManagerOptions) {
    this.#applicationName = options.applicationName
    this.#jwt = new JWT(options.jwtOptions)
    this.#networkCode = options.networkCode.toString()
  }

  createActivityGroupServiceClient = this.#wrapClientCreator(createActivityGroupServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ActivityGroupService.wsdl'))
createActivityServiceClient = this.#wrapClientCreator(createActivityServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ActivityService.wsdl'))
createAdExclusionRuleServiceClient = this.#wrapClientCreator(createAdExclusionRuleServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'AdExclusionRuleService.wsdl'))
createAdRuleServiceClient = this.#wrapClientCreator(createAdRuleServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'AdRuleService.wsdl'))
createAdjustmentServiceClient = this.#wrapClientCreator(createAdjustmentServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'AdjustmentService.wsdl'))
createAudienceSegmentServiceClient = this.#wrapClientCreator(createAudienceSegmentServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'AudienceSegmentService.wsdl'))
createCdnConfigurationServiceClient = this.#wrapClientCreator(createCdnConfigurationServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CdnConfigurationService.wsdl'))
createCmsMetadataServiceClient = this.#wrapClientCreator(createCmsMetadataServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CmsMetadataService.wsdl'))
createCompanyServiceClient = this.#wrapClientCreator(createCompanyServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CompanyService.wsdl'))
createContactServiceClient = this.#wrapClientCreator(createContactServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ContactService.wsdl'))
createContentBundleServiceClient = this.#wrapClientCreator(createContentBundleServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ContentBundleService.wsdl'))
createContentServiceClient = this.#wrapClientCreator(createContentServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ContentService.wsdl'))
createCreativeReviewServiceClient = this.#wrapClientCreator(createCreativeReviewServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CreativeReviewService.wsdl'))
createCreativeServiceClient = this.#wrapClientCreator(createCreativeServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CreativeService.wsdl'))
createCreativeSetServiceClient = this.#wrapClientCreator(createCreativeSetServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CreativeSetService.wsdl'))
createCreativeTemplateServiceClient = this.#wrapClientCreator(createCreativeTemplateServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CreativeTemplateService.wsdl'))
createCreativeWrapperServiceClient = this.#wrapClientCreator(createCreativeWrapperServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CreativeWrapperService.wsdl'))
createCustomFieldServiceClient = this.#wrapClientCreator(createCustomFieldServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CustomFieldService.wsdl'))
createCustomTargetingServiceClient = this.#wrapClientCreator(createCustomTargetingServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'CustomTargetingService.wsdl'))
createDaiAuthenticationKeyServiceClient = this.#wrapClientCreator(createDaiAuthenticationKeyServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'DaiAuthenticationKeyService.wsdl'))
createDaiEncodingProfileServiceClient = this.#wrapClientCreator(createDaiEncodingProfileServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'DaiEncodingProfileService.wsdl'))
createForecastServiceClient = this.#wrapClientCreator(createForecastServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ForecastService.wsdl'))
createInventoryServiceClient = this.#wrapClientCreator(createInventoryServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'InventoryService.wsdl'))
createLabelServiceClient = this.#wrapClientCreator(createLabelServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'LabelService.wsdl'))
createLineItemCreativeAssociationServiceClient = this.#wrapClientCreator(createLineItemCreativeAssociationServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'LineItemCreativeAssociationService.wsdl'))
createLineItemServiceClient = this.#wrapClientCreator(createLineItemServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'LineItemService.wsdl'))
createLineItemTemplateServiceClient = this.#wrapClientCreator(createLineItemTemplateServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'LineItemTemplateService.wsdl'))
createLiveStreamEventServiceClient = this.#wrapClientCreator(createLiveStreamEventServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'LiveStreamEventService.wsdl'))
createMobileApplicationServiceClient = this.#wrapClientCreator(createMobileApplicationServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'MobileApplicationService.wsdl'))
createNativeStyleServiceClient = this.#wrapClientCreator(createNativeStyleServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'NativeStyleService.wsdl'))
createNetworkServiceClient = this.#wrapClientCreator(createNetworkServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'NetworkService.wsdl'))
createOrderServiceClient = this.#wrapClientCreator(createOrderServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'OrderService.wsdl'))
createPlacementServiceClient = this.#wrapClientCreator(createPlacementServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'PlacementService.wsdl'))
createProposalLineItemServiceClient = this.#wrapClientCreator(createProposalLineItemServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ProposalLineItemService.wsdl'))
createProposalServiceClient = this.#wrapClientCreator(createProposalServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ProposalService.wsdl'))
createPublisherQueryLanguageServiceClient = this.#wrapClientCreator(createPublisherQueryLanguageServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'PublisherQueryLanguageService.wsdl'))
createReportServiceClient = this.#wrapClientCreator(createReportServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'ReportService.wsdl'))
createSiteServiceClient = this.#wrapClientCreator(createSiteServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'SiteService.wsdl'))
createStreamActivityMonitorServiceClient = this.#wrapClientCreator(createStreamActivityMonitorServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'StreamActivityMonitorService.wsdl'))
createSuggestedAdUnitServiceClient = this.#wrapClientCreator(createSuggestedAdUnitServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'SuggestedAdUnitService.wsdl'))
createTargetingPresetServiceClient = this.#wrapClientCreator(createTargetingPresetServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'TargetingPresetService.wsdl'))
createTeamServiceClient = this.#wrapClientCreator(createTeamServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'TeamService.wsdl'))
createUserServiceClient = this.#wrapClientCreator(createUserServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'UserService.wsdl'))
createUserTeamAssociationServiceClient = this.#wrapClientCreator(createUserTeamAssociationServiceClient, resolvePath(__dirname, '..', 'wsdl', this.#version, 'UserTeamAssociationService.wsdl'))


  get #soapHeaders() {
    return {
      RequestHeader: {
        attributes: {
          'soapenv:actor': 'http://schemas.xmlsoap.org/soap/actor/next',
          'soapenv:mustUnderstand': 0,
          'xsi:type': 'ns1:SoapRequestHeader',
          'xmlns:ns1': `https://www.google.com/apis/ads/publisher/${this.#version}`,
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
        },
        'ns1:networkCode': this.#networkCode,
        'ns1:applicationName': this.#applicationName,
      },
    }
  }

  #wrapClientCreator<C extends Client>(
    createClient: (
      ...args: Parameters<typeof createClientAsync>
    ) => Promise<C>,
    wsdlPath: string
  ) {
    return async () => {
      const [token, client] = await Promise.all([
        this.#jwt.authorize(),
        createClient(wsdlPath, {
          ignoredNamespaces: {
            namespaces: ['tns'],
          },
        }),
      ])
      if (!token.access_token) {
        console.error(token)
        throw new Error('Failed to authenticate with Google')
      }
      client.addSoapHeader(this.#soapHeaders)
      client.setSecurity(new BearerSecurity(token.access_token))
      return client
    }
  }
}
