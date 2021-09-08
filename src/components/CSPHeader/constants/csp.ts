/**
 * Constants for CSP integration
 */

import { isProduction } from '../utils/environment';

// Login URL
export const LOGIN_URL = '/auth/vmware';

// Set the domain based on the environment
export const CSP_DOMAIN = isProduction ? 'https://console.cloud.vmware.com' : 'https://console-stg.cloud.vmware.com';

export const CSP_CLOUD_SERVICE_CONSOLE_URL = `${CSP_DOMAIN}/csp/gateway/portal/#/consumer`;

export const CSP_CLOUD_SERVICE_USER_MANAGEMENT_URL = `${CSP_DOMAIN}/csp/gateway/portal/#/consumer/usermgmt`;

export const CSP_CLOUD_SERVICE_SUPPORT_URL = `${CSP_DOMAIN}/csp/gateway/portal/#/support`;

export const CSP_CLOUD_SERVICE_USER_URL = `${CSP_DOMAIN}/csp/gateway/portal/#/user`;

export const CSP_CLOUD_SERVICE_ORGANIZATION_INFO_URL = `${CSP_DOMAIN}/csp/gateway/portal/#/organization/info`;

export const CSP_CLOUD_SERVICE_BILLING_URL = `${CSP_DOMAIN}/csp/gateway/portal/#/consumer/billing`;

export const CSP_STAGING_FEATURE_FLAG_INTEGRATION_KEY =
  'aHR0cHM6Ly9jb25zb2xlLXN0Zy5jbG91ZC52bXdhcmUuY29tfHxhUkJXMjMzcTRBUGtid3JCaDc3bg==';

export const CSP_PRODUCTION_FEATURE_FLAG_INTEGRATION_KEY =
  'aHR0cHM6Ly9jb25zb2xlLmNsb3VkLnZtd2FyZS5jb218fDNWZ1UzeU1WYVczcUt3VXZuT0Ry';

export const CSP_STAGING_SERVICE_ID = '6687fcc6-3417-4006-bf31-ce8c2ab536fc';

export const CSP_PRODUCTION_SERVICE_ID = '9d32fcd2-88ca-46ab-940f-1f09b9788b6d';

export const CSP_STAGING_SERVICE_REF_LINK = `/csp/gateway/slc/api/definitions/external/${CSP_STAGING_SERVICE_ID}`;

export const CSP_PRODUCTION_SERVICE_REF_LINK = `/csp/gateway/slc/api/definitions/external/${CSP_PRODUCTION_SERVICE_ID}`;
