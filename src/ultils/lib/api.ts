import axios from 'axios';

const API = axios.create({
  baseURL: `https://vuphamtung.io.vn/`,
});

// API.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjAwNTU2QzAzRkZBQTE5NTJCQUVGRTgxQzI1QjY0RDJFNDAxOUI3OTZSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IkFGVnNBXy1xR1ZLNjctZ2NKYlpOTGtBWnQ1WSJ9.eyJuYmYiOjE2OTExMTYyNDMsImV4cCI6MTY5MjAxNjI0MywiaXNzIjoiaHR0cHM6Ly9jdWFraGF1c28tc3NvLmR0dHQudm4iLCJjbGllbnRfaWQiOiJjdWFraGF1c28iLCJzdWIiOiJkODFkNzI3Ny1jOTlhLTQ4YmMtYTAwZi0zZWI0M2UwYjAzY2QiLCJhdXRoX3RpbWUiOjE2OTExMTYyNDIsImlkcCI6ImxvY2FsIiwidXNlcm5hbWUiOiJhZG1pbiIsImRpc3BsYXluYW1lIjoiaOG7hyB0aOG7kW5nIiwiZW1haWwiOiJhZG1pbkAxMjMuY29tLnZuIiwiZnVsbG5hbWUiOiJRdeG6o24gdHLhu4sgaOG7hyB0aOG7kW5nIiwiaXNzdXBlcnVzZXIiOiJUcnVlIiwiaXNhZG1pbiI6IlRydWUiLCJpZE9yZ2FuaXphdGlvbiI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCIsImp0aSI6IjgwRkRCRjNCNzUyQzE4OTJGNTlFODM4NENFQkFDODQ4Iiwic2lkIjoiNThDNzIxOTYzQkFFRTRFMEY1OEZGQTBFMjZGMDU1QjEiLCJpYXQiOjE2OTExMTYyNDMsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJlbWFpbCJdLCJhbXIiOlsicHdkIl19.LY0sb9531Two5jzL5r0X1TNb_8pWA3b0kA8K3t3XAFlA8qQGvbudeJ5dsZpt3t7SJj86L_TKmxboRR4MaLdJ9wXoSF-KCisv7hKzxUo9upKM7GPGUCdUTQATpKoVvRrYxuuaJt9My_cPe7oX4biJQs0HHpOpXI-2MgrOM5Cv0jinxgn921lEjeYrATH3rp3KvUvbjAzKElzHRW6kcRpmSbT5RXYho3ytZ81_c-P620-WH7OfgwD3Fo30LM6MYa6u5jMnYAZZT8LIGmpyD7VBtdYF3pJnSY3_DqaJR7QdmEMlLwRi6iK7z8UjQN8c8TuWd6nDSKWMuD0vLtKYVIl8uneBEqVrF_GjmNQ_k-ZL71-to7ZJ-ruUQV_nFpiqowRy7TQbw7hxGieDP4Dtz-9N0CP7WGxgIjVFMwBgUuffe14Ot-may5YyI_rtPTO_Y0-ndcUH-WGKL8N01v5o8qYOsxB4G9YAxY_d7U-uA3KWLX-jKQ-sqkrkSzKt2tZyaiL69ezRd49q_PNiWCN95NBOCC8b_DLdNYIBTLm9BFDL_tGYUN_Dp7ypOS0nYgjlVDcALkiA2dO-f0Sm1akK5fUyiIUhnIZ-D337a-zhhQIfSYTX_ClTzKh580_XXesdiIhutJ-5rSnhSb-oeOig7i7OQW4BTrYAeYO3Mk7pf5Pgb5o';

export default {

   getToken: (data: any) => API.post('token', data),
  // resetPassword: (data: any) => APIUSER.put('/resetPassword', data),
  // searhToKhaiByMa: (soToKhai: any) => API.post(`/searhToKhaiByMa/${soToKhai}`),
  // updateTrangThaiToKhai: (data: any) => API.post('/updateTrangThaiToKhai', data),
  // GetDetailToKhaiById: (userId: string, toKhaiId: string) => API.post(`/GetDetailToKhaiById/${userId}/${toKhaiId}`),
  // GetListToKhaiByUserId: (data: any) => API.post(`/GetListToKhaiByUserId`, data),
  // updateTrangThaiToKhaiAppMobile: (data: any) => API.post('/updateTrangThaiToKhaiAppMobile', data),
  // updateTrangThaiThongTinPhuongTienAppMobile: (data: any) => API.post('/updateTrangThaiThongTinPhuongTienAppMobile', data),
  // checkMoToKhaiByIdToKhai: (idToKhai: string) => API.post(`/checkMoToKhaiByIdToKhai/${idToKhai}`),
  // GetDanhSachXeAppMobile: (data: any) => API.post(`/GetDanhSachXeAppMobile`, data),
  // GetListToKhaiDaGuiByUserId: (data: any) => API.post(`/GetListToKhaiDaGuiByUserId`, data),
  // GetListNotificationByUserId: (data: any) => API.post(`/GetListNotificationByUserId`, data),
  // GetListNotificationChuaDocByUserId: (userId: string) => API.post(`/GetListNotificationChuaDocByUserId/${userId}`),
  // updateThongBaoDaDocByUserId: (userId: string) => API.post(`/updateThongBaoDaDocByUserId/${userId}`),
  // GetListToKhaiGuiCapCOByUserId: (data: any) => API.post(`/GetListToKhaiGuiCapCOByUserId`, data),
  // getDetailToKhaiBySoToKhai: (soToKhai: string) => API.post(`/getDetailToKhaiBySoToKhai/${soToKhai}`),
  // InsertUserAppMobile: (data: any) => API.post(`/InsertUserAppMobile`, data),
  // getDanhMucPhuongTien: (idDoanhNghiep: string) => API.post(`/getDanhMucPhuongTien/${idDoanhNghiep}`),
  // GetChartAppMobile: (data: any) => API.post(`/GetChartAppMobile`, data),
  // getDetailThongTinPhuongTienById: (id: string) => API.post(`/getDetailThongTinPhuongTienById/${id}`),
  // getDetailThongTinYTeById: (id: string) => API.post(`/getDetailThongTinYTeById/${id}`),
  // getDanhMucYTe: (idToKhai: string) => API.post(`/getDanhMucYTe/${idToKhai}`),
  // searchToKhaiBySoToKhai:(data: any) => API.post('/SearchToKhaiBySoToKhai', data),
  // updateThongTinPhuongTienAppMobile:(data: any) => API.post('/updateThongTinPhuongTienAppMobile', data),
  // updateThongTinToKhaiYTeAppMobile:(data: any) => API.post('/updateThongTinToKhaiYTeAppMobile', data),
  // InsertToKhaiYTeAppMobile:(data: any) => API.post('/InsertToKhaiYTeAppMobile', data),
  // getDetailPhuongTienByBienSoXe: (bienSoXe: string, idDoanhNghiep: string) => API.post(`/getDetailPhuongTienByBienSoXe/${bienSoXe}/${idDoanhNghiep}`),
  // GetDetailDoanhNghiepByUserId: (userId: string) => API.post(`/GetDetailDoanhNghiepByUserId/${userId}`),
  // GetChungTuAppMobile: (idToKhai: string) => API.post(`/GetChungTuAppMobile/${idToKhai}`),
  // UploadFileToServerByte: (data: any) => API.post('/UploadFileToServerByte', data),
  // UploadFileToServerBase64: (data: any) => API_WITHOUT_AUTH.post('/UploadFileToServerBase64', data),
  // DeleteChungTuAppMobile: (idFile: string) => API.post(`/DeleteChungTuAppMobile/${idFile}`),
  // updateDeviceIdAppMobile: (data: any) => API.post('updateDeviceIdAppMobile', data),
  // API_PlateTechainerAppMobile: (data: any) => API_WITHOUT_AUTH.post('API_PlateTechainerAppMobile', data),
  // getDanhSachGiamSatPhuongTienAppMobile:(data: any) => API.post('/getDanhSachGiamSatPhuongTienAppMobile', data),

};
