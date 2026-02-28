import axios from "axios";

// Better typing
interface OtpData {
  otp: number;
  expiresAt: number;
}

// In-memory store (⚠️ Only for dev)
export const otpStore: Record<string, OtpData> = {};

export const sendOtpSms = async (mobile: string): Promise<number> => {
  if (!mobile) {
    throw new Error("Mobile number is required");
  }

  // 6 digit OTP (more secure)
  const otp = Math.floor(100000 + Math.random() * 900000);

  // 5 minute expiry
  otpStore[mobile] = {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  };

  try {
    const message = `OTP for login into INDIADEALSS is ${otp}. Do not share it with anyone.`;

    const url = "http://nimbusit.biz/api/SmsApi/SendSingleApi";

    const params = {
      UserID: process.env.SMS_USER,
      Password: process.env.SMS_PASS,
      SenderID: process.env.SMS_SENDER,
      Phno: mobile,
      Msg: message,
      EntityID: process.env.SMS_ENTITY_ID,
      TemplateID: process.env.SMS_TEMPLATE_ID,
    };

    const response = await axios.get(url, { params });

    console.log("SMS API Response:", response.data);

    return otp;
  } catch (err: any) {
    console.error("Error while sending SMS:", err.message);
    throw new Error("Failed to send OTP: " + err.message);
  }
};


export const verifyOtp = (mobile: string, enteredOtp: number): boolean => {
  const record = otpStore[mobile];

  if (!record) return false;

  if (Date.now() > record.expiresAt) {
    delete otpStore[mobile];
    return false;
  }

  if (record.otp !== enteredOtp) return false;

  delete otpStore[mobile]; // remove after success
  return true;
};