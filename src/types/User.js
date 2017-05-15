// @flow

export type UidUserResponseType = {
  uid: string,
  emailVerified: boolean,
  disabled: boolean,
  metadata: {
    lastSignedInAt?: string,
    createdAt: string,
  },
  providerData: any,
};
