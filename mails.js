// const jwt=require('jsonwebtoken');
// const decodedToken=jwt.decode('eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4c20tZiIsImlhdCI6MTYxNzE2NjY0MSwic3ViIjoiIiwiZW5jb2RlNjRwYXlsb2FkIjoiTTJreFB6TS9GeUlnYm14NWZXZG1LVHM5SkNROUtUTVNKajRwTGpNL2FuRndmR0I4WkdrU0RSb0lCZ2dkYm14dk1Db2xQM3NvSml3allUSStKV2xvYmpjOUlTQWhOWFIzYWhNWEFYUmhhaTRwTFQ4aEZ5b2dLQ1FvT3pobWRuUWxQU2NiTHprak96NHBLU1FOUEM0M09IZ3VKeVptWUhRK1BDb3dPU1Z2Y25wb2JqVTRLaUluSUROdmNtbDhkRzUxY0dsb2JqUTRPeUlxS1NVK0Z6c3NJemdvYW5GbWZXUitmSDV5ZTI1MGVHbG9ianNpS2lJb0tRazlJQ1FxS1hSM2FucDJmMkY2ZjN4emUyRnZaR2tyUGpFc0ppSTNMU0lrSnlVYkpUSnZjbnBvYmpJb09DbzJPRHNvSmo4YkpUSnZjbnBvYmlNK0xUa2JJamNnTFdsK2JqNDRKQlFuSXpnK1BTWWhQblJoYWlncklTWXNKakliSlRKdmNtbDFibnB2TFNZMElEazBMUzRiSURNN0xTZG1kblJ2WkdrMkl6b29GeUlnYm14dmUzbG9mMlZoZTM5b2VHQmhlWHBvZjJGaGUzTm9mMjloZkh0b2VHZGhmSGhvZUdKaGZINW9mWHA1Wkg1b2ZXWmhlWGxvZldWaGVYOW9mV0JoZVh4b2ZXOWhlbnRvZUdGaGZITm9lRzloZlh0b2VXZGhmWGxvZVdKaGZYNW9lV0JoZlhOb2VXOWhmbnRtWUhRdVBUazJLVGd1TVdsK2JoOERHbWxvYmpJc1BDNGJLamsvSlNvd2JteHZMQzlwQVJ0Z01USTlOWFlGQUhFcElXdytPMmxvYmpVaUpUc2xJaThTSmlvcEtYUjNhaHNsUGowb09tc1BPU1lsS1Nka0xUZ3BhQms5TFRnU2VSUUhibnB2S1RnM0l6VWtLVDhoS0FrdUp5WTBMVGcwRnlJZ2JteHZlV2QyWUdWaGZHZHlZR0ZoY0dkOVlHZDlaSHAxWUdkL1pIcDNZR2Q1WkhweFlHZDdaSHB6WUdkMVpIcDlZR1I5YW1kbUlEY2pMejRsS3pOdmNta2hJbnNZRzJsb2JpUWlKQzRiSWpjZ0xXbCtiaDhqS3lJZ0tUZzVhQW9nSVQ4alpCczJJelFoTFNaa0RUSWdJU1ZvRHo0c0ppd2hiQmNwSlNJcVlBVUJDV3NTSlRNNkxUbG9Iek0vUGlJbktYWU9KeVUzT1Rzb09tY0hJemdySVN4a0FUY2pLU3doUG5vTU96Z2hPSFlBS1NVbEt6TS9aQWdySWpBa0wyc1NKVE02TFRsb0h4b01hQVlsSWpjcUxUbG9EUnNlYUFvZ0lUOGpJVGd3UGpjNUp6bG9DaU1oTGlJb0lEc29KajlrR1NVb09tY0NPVG9ySVNjb0lUTWpQR3NKTFRnc0x5NDJZQVVCQ1dzUlB6TS9aQW9nSVQ4aklUZ3dQamM1Snpsb0h6TS9QaUluS1hZZEp6a3dLamtoSVNSa0FUY2pLU3doUG5vT0tUOGxJRGtxYUFZbElqY3FMVGxvRFNZOU9pUXlLU1JoQVNVbkpUSW9KajlrR1NVb09tY05JalVrTEM0cU9IWUFLU1VsS3pNL1pBZzJKU0lrS3lvb2JCOGpLeUlnS1RnNWFBWWxJamNxTFRsb0hDUWlLaWNoSVhZWU95NDJZQVkvSnlrb0tUdHRCU29xTFRFb09tY0hKRGNqTHk1a0dTVW9PbWNISkRjakx5NWtBVGNqS1N3aFBub2ZMVHNyUGlKdEhUZ2hQbm9lTFRreUpUVW9hQThoUHoxdEhUZ2hQbm9lQVFvSmJBVUJDV3NKTFRnc0x5NDJZQklzUENwa0RUSWdJU1V0UHlJL0tUOHJQbm9KS1Q4bGJBTStMVGxvQ0RjNUtXc1NKVE02TFRsb0FqazVJUzB0THpjNUlTUXFiQmNwSlNJcUpTVTVPaW93SXlSaEJpUXdKVEFrS3lvd0pUa2phQVlsSWpjcUxUbG9Bams1SVMwdEx6YzVJU1FxYkFBa0xUd2hQbm9KS1Q4bGJCY3BKU0lxZlhvSktUOGxiQmNwSlNJcWZub2VJU29wRXhrOUxUa2xPRGsvWkJneFBETS9hQW9nSVQ4amFtZG1Mak0rUEJnaElEb2tKaXhtZG5RRGFtZG1LaVFvTFdsK2JoaHZaR2txS1NFQktUNHFMejV2Y21rS2JucHZLeVFwSlRncUd5UXJJblIzYWdWbVlIUWdNUTBsT2prNE9pSXdLWFIzYWdWbVlIUXVLVDh6SlNVb2FuRm1BblJoYWkwaExTSTRPaTRnYm14dkJtbG9ialEvTFNvdktqODFPRGtoS2o4MWFuRm1CUmdPYW1kbUpUZzdMVGd3SlRFc1BDSXJJaVkvTFMwdE5IUjNhaHNXRG5SaGFpUTJLRE0vT0RraEtqODFhbkZtSGhNY2FtZG1QakF1T0RraEtqODFhbkZtSGhBT2FtZG1LR1F1T0RraEtqODFhbkZtSGhNY2FtZG1KU0lvSlRzMktUQWtNR2wrYmg4WkJXbG9iaU0rTFRrTklUY3FMV2wrYmpBa0pDNTFlbWQ0ZjNKMmVtOTFlbmx4UENRaWVXVXVQREZ2WkdraU9Ub2hCaW9wS1hSM2Fnb21KRDgrSUM0dmJCd3NJU1ZtWUhRa094Z3hQRE0vSFRnaFBuUjNlVFk9IiwiaXNzIjoieHNtLWYiLCJ1c2VyaWQiOjEyMywiZXhwIjoxNjE3NzcxNDQxfQ.8L0DWAAIgOQ8YCr1DLpy5OUFkxx2zoVqV7TQgCrkcXc',{complete: true})
//  console.log(decodedToken.payload)
//  console.log(decodedToken.payload.encode64payload)
// function parseJwt(token) {
//     var header=token.split('.')[0]
//     console.log(header)
//     var base64Payload = token.split('.')[1];
//     var payload = Buffer.from(base64Payload, 'base64');
//     return JSON.parse(payload.toString());
//   }

//   let payload=parseJwt('')
//   console.log('payload' , payload)

const decodingJWT = (token) => {
  console.log("decoding JWT token");
  if (token !== null || token !== undefined) {
    const base64String = token.split(".")[1];
    const decodedValue = JSON.parse(
      Buffer.from(base64String, "base64").toString("ascii")
    );
    //const decodedValue=JSON.stringify(Buffer.from(base64String,'base64').toString('ascii'))
    //console.log(decodedValue);
    return decodedValue;
  }
  return null;
};
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
console.log("node");
const decodedToken = decodingJWT(
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJ4c20tZiIsImlhdCI6MTYxNzE2NjY0MSwic3ViIjoiIiwiZW5jb2RlNjRwYXlsb2FkIjoiTTJreFB6TS9GeUlnYm14NWZXZG1LVHM5SkNROUtUTVNKajRwTGpNL2FuRndmR0I4WkdrU0RSb0lCZ2dkYm14dk1Db2xQM3NvSml3allUSStKV2xvYmpjOUlTQWhOWFIzYWhNWEFYUmhhaTRwTFQ4aEZ5b2dLQ1FvT3pobWRuUWxQU2NiTHprak96NHBLU1FOUEM0M09IZ3VKeVptWUhRK1BDb3dPU1Z2Y25wb2JqVTRLaUluSUROdmNtbDhkRzUxY0dsb2JqUTRPeUlxS1NVK0Z6c3NJemdvYW5GbWZXUitmSDV5ZTI1MGVHbG9ianNpS2lJb0tRazlJQ1FxS1hSM2FucDJmMkY2ZjN4emUyRnZaR2tyUGpFc0ppSTNMU0lrSnlVYkpUSnZjbnBvYmpJb09DbzJPRHNvSmo4YkpUSnZjbnBvYmlNK0xUa2JJamNnTFdsK2JqNDRKQlFuSXpnK1BTWWhQblJoYWlncklTWXNKakliSlRKdmNtbDFibnB2TFNZMElEazBMUzRiSURNN0xTZG1kblJ2WkdrMkl6b29GeUlnYm14dmUzbG9mMlZoZTM5b2VHQmhlWHBvZjJGaGUzTm9mMjloZkh0b2VHZGhmSGhvZUdKaGZINW9mWHA1Wkg1b2ZXWmhlWGxvZldWaGVYOW9mV0JoZVh4b2ZXOWhlbnRvZUdGaGZITm9lRzloZlh0b2VXZGhmWGxvZVdKaGZYNW9lV0JoZlhOb2VXOWhmbnRtWUhRdVBUazJLVGd1TVdsK2JoOERHbWxvYmpJc1BDNGJLamsvSlNvd2JteHZMQzlwQVJ0Z01USTlOWFlGQUhFcElXdytPMmxvYmpVaUpUc2xJaThTSmlvcEtYUjNhaHNsUGowb09tc1BPU1lsS1Nka0xUZ3BhQms5TFRnU2VSUUhibnB2S1RnM0l6VWtLVDhoS0FrdUp5WTBMVGcwRnlJZ2JteHZlV2QyWUdWaGZHZHlZR0ZoY0dkOVlHZDlaSHAxWUdkL1pIcDNZR2Q1WkhweFlHZDdaSHB6WUdkMVpIcDlZR1I5YW1kbUlEY2pMejRsS3pOdmNta2hJbnNZRzJsb2JpUWlKQzRiSWpjZ0xXbCtiaDhqS3lJZ0tUZzVhQW9nSVQ4alpCczJJelFoTFNaa0RUSWdJU1ZvRHo0c0ppd2hiQmNwSlNJcVlBVUJDV3NTSlRNNkxUbG9Iek0vUGlJbktYWU9KeVUzT1Rzb09tY0hJemdySVN4a0FUY2pLU3doUG5vTU96Z2hPSFlBS1NVbEt6TS9aQWdySWpBa0wyc1NKVE02TFRsb0h4b01hQVlsSWpjcUxUbG9EUnNlYUFvZ0lUOGpJVGd3UGpjNUp6bG9DaU1oTGlJb0lEc29KajlrR1NVb09tY0NPVG9ySVNjb0lUTWpQR3NKTFRnc0x5NDJZQVVCQ1dzUlB6TS9aQW9nSVQ4aklUZ3dQamM1Snpsb0h6TS9QaUluS1hZZEp6a3dLamtoSVNSa0FUY2pLU3doUG5vT0tUOGxJRGtxYUFZbElqY3FMVGxvRFNZOU9pUXlLU1JoQVNVbkpUSW9KajlrR1NVb09tY05JalVrTEM0cU9IWUFLU1VsS3pNL1pBZzJKU0lrS3lvb2JCOGpLeUlnS1RnNWFBWWxJamNxTFRsb0hDUWlLaWNoSVhZWU95NDJZQVkvSnlrb0tUdHRCU29xTFRFb09tY0hKRGNqTHk1a0dTVW9PbWNISkRjakx5NWtBVGNqS1N3aFBub2ZMVHNyUGlKdEhUZ2hQbm9lTFRreUpUVW9hQThoUHoxdEhUZ2hQbm9lQVFvSmJBVUJDV3NKTFRnc0x5NDJZQklzUENwa0RUSWdJU1V0UHlJL0tUOHJQbm9KS1Q4bGJBTStMVGxvQ0RjNUtXc1NKVE02TFRsb0FqazVJUzB0THpjNUlTUXFiQmNwSlNJcUpTVTVPaW93SXlSaEJpUXdKVEFrS3lvd0pUa2phQVlsSWpjcUxUbG9Bams1SVMwdEx6YzVJU1FxYkFBa0xUd2hQbm9KS1Q4bGJCY3BKU0lxZlhvSktUOGxiQmNwSlNJcWZub2VJU29wRXhrOUxUa2xPRGsvWkJneFBETS9hQW9nSVQ4amFtZG1Mak0rUEJnaElEb2tKaXhtZG5RRGFtZG1LaVFvTFdsK2JoaHZaR2txS1NFQktUNHFMejV2Y21rS2JucHZLeVFwSlRncUd5UXJJblIzYWdWbVlIUWdNUTBsT2prNE9pSXdLWFIzYWdWbVlIUXVLVDh6SlNVb2FuRm1BblJoYWkwaExTSTRPaTRnYm14dkJtbG9ialEvTFNvdktqODFPRGtoS2o4MWFuRm1CUmdPYW1kbUpUZzdMVGd3SlRFc1BDSXJJaVkvTFMwdE5IUjNhaHNXRG5SaGFpUTJLRE0vT0RraEtqODFhbkZtSGhNY2FtZG1QakF1T0RraEtqODFhbkZtSGhBT2FtZG1LR1F1T0RraEtqODFhbkZtSGhNY2FtZG1KU0lvSlRzMktUQWtNR2wrYmg4WkJXbG9iaU0rTFRrTklUY3FMV2wrYmpBa0pDNTFlbWQ0ZjNKMmVtOTFlbmx4UENRaWVXVXVQREZ2WkdraU9Ub2hCaW9wS1hSM2Fnb21KRDgrSUM0dmJCd3NJU1ZtWUhRa094Z3hQRE0vSFRnaFBuUjNlVFk9IiwiaXNzIjoieHNtLWYiLCJ1c2VyaWQiOjEyMywiZXhwIjoxNjE3NzcxNDQxfQ.8L0DWAAIgOQ8YCr1DLpy5OUFkxx2zoVqV7TQgCrkcXc"
);
console.log(decodedToken.encode64payload);
