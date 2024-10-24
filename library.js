/**
 * 日付を(YYYY/MM/DD形式に変換する)
 **/
function formatDisplayDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}
  
/**
 * すべてのコンテキストをログに表示
 **/
function allContexts() {
  context.Log("---------All Contexts[Start]----------")
  context.Log(`context.AbsoluteUri: ${context.AbsoluteUri}`);
  context.Log(`context.AbsolutePath: ${context.AbsolutePath}`);
  context.Log(`context.Url: ${context.Url}`);
  context.Log(`context.UrlReferrer: ${context.UrlReferrer}`);
  context.Log(`context.Controller: ${context.Controller}`);
  context.Log(`context.Query: ${context.Query}`);
  context.Log(`context.Action: ${context.Action}`);
  context.Log(`context.TenantId: ${context.TenantId}`);
  context.Log(`context.SiteId: ${context.SiteId}`);
  context.Log(`context.Id: ${context.Id}`);
  context.Log(`context.Groups: ${context.Groups}`);
  context.Log(`context.TenantTitle: ${context.TenantTitle}`);
  context.Log(`context.SiteTitle: ${context.SiteTitle}`);
  context.Log(`context.RecordTitle: ${context.RecordTitle}`);
  context.Log(`context.DeptId: ${context.DeptId}`);
  context.Log(`context.UserId: ${context.UserId}`);
  context.Log(`context.LoginId: ${context.LoginId}`);
  context.Log(`context.LoginId: ${context.LoginId}`);
  context.Log(`context.Language: ${context.Language}`);
  context.Log(`context.TimeZoneInfo: ${context.TimeZoneInfo}`);
  context.Log(`context.HasPrivilege: ${context.HasPrivilege}`);
  context.Log(`context.ApiVersion: ${context.ApiVersion}`);
  context.Log(`context.ApiRequestBody: ${context.ApiRequestBody}`);
  context.Log(`context.RequestDataString: ${context.RequestDataString}`);
  context.Log(`context.ContentType: ${context.ContentType}`);
  context.Log(`context.ControlId: ${context.ControlId}`);
  context.Log(`context.Condition: ${context.Condition}`);
  context.Log("---------All Contexts[End]----------")
}

const $v = {
  formatDisplayDate,
  allContexts,
}
