/**
 * @license
 * MIT License
 * 
 * Copyright (c) 2023 [Your Name or Company]
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * 日付を(YYYY/MM/DD形式に変換する)
 * @param {Date} date - 日付
 **/
function formatDisplayDate(date) {
  if (!date) throw new Error('日付が指定されていません');

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

/**
 * Slackにメッセージを送信
 * @param {string} webhookUrl - SlackのWebhook URL
 * @param {string} channel - Slackのチャンネル名
 * @param {string} userName - Slackのユーザー名
 * @param {string} message - 送信するメッセージ
 */
function sendSlack(webhookUrl, channel, userName, message) {
  if (!webhookUrl) throw new Error('Webhook URLが指定されていません');
  if (!channel) throw new Error('チャンネルが指定されていません');
  if (!userName) throw new Error('ユーザー名が指定されていません');
  if (!message) throw new Error('メッセージが指定されていません');

  const data = {
    channel,
    userName,
    text: message,
  };
  
  httpClient.RequestUri = webhookUrl;
  httpClient.Content = JSON.stringify(data);
  
  const response = httpClient.Post();
  if(httpClient.IsSuccess) {
    context.Log('Success: ' + response);
  }else{
    context.Log('Error: (' + httpClient.StatusCode + ')' + response);
  }
}

/**
 * items.Getで取得したデータ(Object)を配列に変換
 * @param {Object} items - items.Getで取得したデータ
 */
function convertObjectToArray(items) {
  const result = [];
  for (let item of items) {
    result.push(item);
  }
  return result;
}

const $v = {
  formatDisplayDate,
  allContexts,
  sendSlack,
  convertObjectToArray,
}
