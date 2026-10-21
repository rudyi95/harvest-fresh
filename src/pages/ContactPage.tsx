import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutlined";

import HCaptcha from "@hcaptcha/react-hcaptcha";

import { CBreadcrumbs } from "src/components/common";

const HCAPTCHA_SITE_KEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
  subscribe: boolean;
}

type FormStatus = "success" | "error" | null;

const initialForm: ContactForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
  subscribe: false,
};

const ContactPage = () => {
  const [form, setForm] = useState<ContactForm>({ ...initialForm });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== null) {
      setStatus(null);
    }
  };

  const resetCaptcha = () => {
    setCaptchaToken(null);
    captchaRef.current?.resetCaptcha();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    if (!captchaToken) {
      setErrorMessage("Please complete the CAPTCHA verification.");
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);
    setErrorMessage("");

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is missing.");
      }

      const payload = {
        access_key: accessKey,
        subject: "New Contact Us Message - Harvest Fresh",
        from_name: "Harvest Fresh Website",
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        message: form.message.trim(),
        newsletter_subscription: form.subscribe ? "Yes" : "No",
        "h-captcha-response": captchaToken,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send your message.");
      }

      setForm({ ...initialForm });
      setStatus("success");
      resetCaptcha();
    } catch (error) {
      console.error("Web3Forms submission error:", error);

      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );

      setStatus("error");
      resetCaptcha();
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "5px",
      backgroundColor: "#fff",
      fontSize: 14,
    },
    "& .MuiOutlinedInput-input": {
      py: 1.5,
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
    >
      {/* BREADCRUMBS */}
      <Box
        sx={{
          borderBottom: "1px solid #f1f1f1",
          py: 2,
        }}
      >
        <CBreadcrumbs page="Contact Us" />
      </Box>

      {/* CONTACT SECTION */}
      <Container
        maxWidth="md"
        sx={{
          pt: { xs: 5, md: 8 },
          pb: { xs: 7, md: 10 },
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "0.85fr 2fr",
            },
            gap: { xs: 5, md: 7 },
          }}
        >
          {/* LEFT COLUMN */}
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 26, md: 28 },
                fontWeight: 600,
                color: "#222",
                mb: 1.5,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              sx={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "#444",
                mb: 4,
              }}
            >
              Have any questions? Reach out to us from our contact form and we will get back to you
              shortly.
            </Typography>

            <Stack spacing={3}>
              {/* ADDRESS */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{
                    fontSize: 22,
                    mt: 0.2,
                    color: "#333",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      mb: 0.5,
                    }}
                  >
                    Custom Address
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#555",
                      lineHeight: 1.7,
                    }}
                  >
                    100 East Rand Rd,
                    <br />
                    Arlington Heights, IL 60004
                  </Typography>
                </Box>
              </Stack>

              {/* PHONE */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <PhoneOutlinedIcon
                  sx={{
                    fontSize: 22,
                    color: "#333",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      mb: 0.5,
                    }}
                  >
                    Phone
                  </Typography>

                  <Link
                    href="tel:+18472291010"
                    underline="hover"
                    sx={{
                      color: "#555",
                      fontSize: 13,
                    }}
                  >
                    (847) 229-1010
                  </Link>
                </Box>
              </Stack>

              {/* EMAIL */}
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <MailOutlineIcon
                  sx={{
                    fontSize: 22,
                    color: "#333",
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      mb: 0.5,
                    }}
                  >
                    E-mail
                  </Typography>

                  <Link
                    href="mailto:harvestfresh24@gmail.com"
                    underline="hover"
                    sx={{
                      color: "#555",
                      fontSize: 13,
                      overflowWrap: "anywhere",
                    }}
                  >
                    harvestfresh24@gmail.com
                  </Link>
                </Box>
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT COLUMN */}
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 26, md: 28 },
                fontWeight: 600,
                color: "#222",
                mb: 2,
              }}
            >
              Drop Us a Line
            </Typography>

            {/* SUCCESS MESSAGE */}
            {status === "success" && (
              <Alert severity="success" sx={{ mb: 2 }} onClose={() => setStatus(null)}>
                Thank you! Your message has been sent successfully. We'll get back to you shortly.
              </Alert>
            )}

            {/* ERROR MESSAGE */}
            {status === "error" && (
              <Alert severity="error" sx={{ mb: 2 }} onClose={() => setStatus(null)}>
                {errorMessage}
              </Alert>
            )}

            {/* CONTACT FORM */}
            <Box component="form" onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                {/* NAME */}
                <TextField
                  name="name"
                  placeholder="Name *"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyle}
                />

                {/* PHONE */}
                <TextField
                  name="phone"
                  placeholder="Phone Number *"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyle}
                />

                {/* EMAIL */}
                <TextField
                  name="email"
                  placeholder="Email *"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyle}
                />

                {/* ADDRESS */}
                <TextField
                  name="address"
                  placeholder="Address, City, Zip Code"
                  value={form.address}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  disabled={loading}
                  sx={inputStyle}
                />
              </Box>

              {/* MESSAGE */}
              <TextField
                name="message"
                placeholder="Message *"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={5}
                disabled={loading}
                sx={{
                  ...inputStyle,
                  mt: 2,
                }}
              />

              {/* NEWSLETTER */}
              <FormControlLabel
                sx={{
                  alignItems: "flex-start",
                  mt: 1,
                  mr: 0,
                }}
                control={
                  <Checkbox
                    size="small"
                    checked={form.subscribe}
                    disabled={loading}
                    onChange={(event) => {
                      setForm((prev) => ({
                        ...prev,
                        subscribe: event.target.checked,
                      }));
                    }}
                    sx={{
                      p: 0.5,
                      mr: 0.5,
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: "#666",
                      lineHeight: 1.5,
                    }}
                  >
                    I would like to receive information from XO Deli on exclusive offers that may be
                    of interest to me. XO Deli records certain usage data for security, support, and
                    reporting purposes.
                  </Typography>
                }
              />

              {/* HCAPTCHA */}
              <Box
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "100%",
                  overflowX: "auto",
                }}
              >
                <HCaptcha
                  ref={captchaRef}
                  sitekey={HCAPTCHA_SITE_KEY}
                  reCaptchaCompat={false}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setStatus(null);
                  }}
                  onExpire={() => {
                    setCaptchaToken(null);
                  }}
                  onError={() => {
                    setCaptchaToken(null);
                    setErrorMessage("CAPTCHA verification failed. Please try again.");
                    setStatus("error");
                  }}
                />
              </Box>

              {/* SUBMIT BUTTON */}
              <Box sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading || !captchaToken}
                  startIcon={loading ? <CircularProgress size={16} color="inherit" /> : undefined}
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "30px",
                    textTransform: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    px: 3,
                    py: 1,
                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#c62828",
                      boxShadow: "none",
                    },

                    "&.Mui-disabled": {
                      backgroundColor: "#999",
                      color: "#fff",
                    },
                  }}
                >
                  {loading ? "Sending..." : "Send message"}
                </Button>
              </Box>

              <Typography
                sx={{
                  fontSize: 12,
                  color: "#777",
                  mt: 1.5,
                }}
              >
                * These fields are required.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* GOOGLE MAPS */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, md: 400 },
          overflow: "hidden",
        }}
      >
        <Box
          component="iframe"
          title="XO Harvest Fresh Location"
          src="https://www.google.com/maps?q=100+East+Rand+Road+Arlington+Heights+IL+60004&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactPage;
