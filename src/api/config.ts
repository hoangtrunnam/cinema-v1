// export const enviromentConfig = require('../enviroment/develop.json')
export const baseDomain = "https://cinema-team.asia";

// export const baseUrl = "https://selfcare.vietnamobile.com.vn"; // staging

// export const baseUrl = "https://cinema-api-vzrcoixrua-as.a.run.app"; // release

export const baseUrl = "https://localhost:44389"; // local

export const timeout = 30000;

// api here
export const apitest = "/cms/api/v1/name-shop-mall";

// resgister user
export const apiRegisterUser = "/api/cus/Customer/Register";

// login user
export const apiLoginUser = "/api/Customer/Login";

// api get detail userinfo
export const apiGetDetailUser = "/api/Customer/GetMyInfo";

// api update userinfo
export const apiUpdateUserInfo = "/api/cus/Customer/EditMyInfo";

// api get all film
export const apiGetAllFilm = "/api/MovieInfo/getListMovie";

// api get suat chieu theo ngay
export const apiGetAllShowTimeByDate = "/api/ShowtimeInfo/getListShowTime";

// api get ghe theo id suat chieu
export const apiGetAllSeatByShowTimeId =
  "/api/ShowtimeInfo/getListTicketByShowTime";

// api check seat
export const apiCheckSeatPicked = "api/Booking/CustomerCheckTicket";

// api buy tickets
export const apiBuyTickets = "/api/Booking/CustomerBooking";

// api cancel tickets
export const apiCancelBookingTickets = "/api/Booking/CancelBooking";

// api get list gift
export const apiGetGift = "/api/PolicyGifts/GetAll";

// api get list gift for trade
export const apiGetGiftTrade = "api/RedeemVoucher/RedeemVoucher";

// api trade gift
export const apiPostGiftTrade = "/api/RedeemVoucher/CreateRedeemVoucher";

// api update gift when finished buy tickets
export const apiUpdateGiftTrade = "api/RedeemVoucher/UpdateRedeemVoucher";

// api get list food
export const apiGetListFood = "api/MstFood/GetAll";

// api create transaction
export const apiCreateTransaction = "/api/Booking/CreateTransaction";

// api buy food
export const apiBuyFood = "Booking/CustomerBookFood";
