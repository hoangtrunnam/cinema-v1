import React, { useEffect, useState } from "react";
const htmlFile = require("./memberRule.htm");

const MemberRule = () => {
  const [htmlContent, setHtmlContent] = useState(""); // Khởi tạo state để lưu trữ nội dung HTML

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(htmlFile); // Đọc file HTML
        const html = await response.text(); // Chuyển đổi nội dung thành chuỗi văn bản

        setHtmlContent(html); // Lưu trữ nội dung HTML vào state
      } catch (error) {
        console.error("Error fetching HTML file:", error);
      }
    };

    fetchHtmlContent(); // Gọi hàm đọc nội dung HTML khi thành phần được render
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MemberRule;
