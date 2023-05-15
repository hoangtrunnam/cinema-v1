import moment from "moment-timezone";
/** func lấy ra ngày từ trong định dạng thời gian chuẩn
 * 2021-06-25T23:59:59.000+07:00 -> format: (dd-mm-yyyy, ...)
 */
export const convertDayFromString: (
  value?: string | Date,
  format?: string
) => string = (value = "", format = "DD/MM/yyyy") => {
  if (!value) return "";
  return moment(value).format(format);
};
