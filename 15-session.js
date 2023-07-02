/* 
Session (เซสชั่น)

-   เป็นรูปแบบการเก็บข้อมูลบางอย่างไว้ใน server เพื่อที่จะนำข้อมูลดังกล่าวมาใช้งานภายหลัง

คุณสมบัติ session

-   เมื่อทำการเชื่อมต่อกับเว็บไซต์หรือทำงานกับ server ตัว server จะสร้างรหัสสำหรับอ้างอิงผู้ใช้คนนั้น โดยรหัสดังกล่าวจะเรียกว่า serrion id
โดยผู้ใช้ที่เชื่อมต่อ session id ที่มีค่าไม่ซ้ำกันสำหรับอ้างอิงตัวผู้ใช้งานเอง

-   session id จะถูกอ้างอิงระหว่างที่ผู้ใช้งานเชื่อมต่อกับ server และเมื่อยกเลิกการเชื่อมต่อค่า session id ก็จะถูกยกเลิกด้วย เช่น
เมื่อผู้ใช้ทำการปิด browser และเมื่อมีการเชื่อมต่อใหม่อีกครั้งค่า session id ก็จะถูกสร้างขึ้นมาใหม่ด้วยเช่นกัน

-   ข้อมูลใน session จะนำมาจำแนกผู้ใช้แต่ละคนออกจากกัน มันจะใช้ได้เฉพาะกับผู้ใช้คนนั้นๆไม่สามารถร่วมกับคนอื่นได้

-   ค่า session id ไม่สามารถใช้งานร่วมกันระหว่าง browser ได้เช่น session ที่ทำงานใน google chrome ไม่สามารถนำไปใช้กับ firefox ได้

-   ข้อมูล session ที่สร้างขึ้น สามาถนำไปทำงานในแต่ละ page ได้เหมือนกับ cookie

-   ข้อมูล session จะใช้งานได้แค่ชั่วคราวเท่านั้น คือเชื่อมต่อเมื่อเวลาเปิด browser แต่เมื่อปิด browser ไป ข้อมูลจะถูกยกเลิกการเชื่อมต่อ

-   ถ้าต้องการให้สภาพการเชื่อมต่อยังคงอยู่หรือการทำงานเหมือน cookie จำเป็นต้องอาศัยการจัดเก็บ session id ไว้ที่เครื่องผู้ใช้และเก็บช้อมูล session
ไว้ที่ server แทน
*/