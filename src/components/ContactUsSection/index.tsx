// import { useState } from "react";
// import type { FormEvent, ChangeEvent } from "react";

// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Stack,
//   Link,
// } from "@mui/material";

// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
// import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import { ContactUsForm } from "../common/contactUsForm";

// interface ContactForm {
//   name: string;
//   phone: string;
//   email: string;
//   address: string;
//   message: string;
// }

const ContactUsSection = () => {
  // const [form, setForm] = useState<ContactForm>({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   address: "",
  //   message: "",
  // });

  // const [subscribe, setSubscribe] = useState(false);

  // const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = event.target;

  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   // Пізніше підключимо API для відправки форми.
  //   console.log("Contact form:", form);
  //   console.log("Subscribe:", subscribe);
  // };

  // const inputStyles = {
  //   "& .MuiOutlinedInput-root": {
  //     backgroundColor: "#fff",
  //     borderRadius: "5px",

  //     "& fieldset": {
  //       borderColor: "#ddd",
  //     },

  //     "&:hover fieldset": {
  //       borderColor: "#aaa",
  //     },

  //     "&.Mui-focused fieldset": {
  //       borderColor: "#444",
  //     },
  //   },

  //   "& .MuiInputBase-input": {
  //     fontSize: "14px",
  //   },
  // };

  return (
    <ContactUsForm />
    // <Box
    //   component="section"
    //   id="contact"
    //   sx={{
    //     backgroundColor: "#e60012",
    //     color: "#fff",
    //     py: { xs: 6, md: 8 },
    //     scrollMarginTop: "80px",
    //   }}
    // >
    //   <Container maxWidth="md">
    //     <Box
    //       sx={{
    //         display: "grid",
    //         gridTemplateColumns: {
    //           xs: "1fr",
    //           md: "220px 1fr",
    //         },
    //         gap: { xs: 5, md: 7 },
    //       }}
    //     >
    //       {/* LEFT: CONTACT INFORMATION */}
    //       <Box
    //         sx={{
    //           textAlign: "left",
    //         }}
    //       >
    //         <Typography
    //           variant="h5"
    //           sx={{
    //             fontWeight: 600,
    //             mb: 2,
    //           }}
    //         >
    //           Contact Us
    //         </Typography>

    //         <Typography
    //           sx={{
    //             fontSize: "14px",
    //             lineHeight: 1.7,
    //             mb: 4,
    //           }}
    //         >
    //           Have any questions? Reach out to us from our contact form and we will get back to you
    //           shortly.
    //         </Typography>

    //         <Stack spacing={3}>
    //           <Stack
    //             direction="row"
    //             spacing={1.5}
    //             sx={{
    //               display: "flex",
    //               alignItems: "flex-start",
    //             }}
    //           >
    //             <LocationOnOutlinedIcon />

    //             <Box>
    //               <Typography
    //                 sx={{
    //                   fontWeight: 600,
    //                   fontSize: "14px",
    //                 }}
    //               >
    //                 Custom Address
    //               </Typography>

    //               <Typography sx={{ fontSize: 13, lineHeight: 1.7 }}>
    //                 100 East Rand Rd, Arlington Heights, IL 60004
    //               </Typography>
    //             </Box>
    //           </Stack>

    //           <Stack
    //             direction="row"
    //             spacing={1.5}
    //             sx={{
    //               display: "flex",
    //               alignItems: "flex-start",
    //             }}
    //           >
    //             <PhoneOutlinedIcon />

    //             <Box>
    //               <Typography
    //                 sx={{
    //                   fontWeight: 600,
    //                   fontSize: "14px",
    //                 }}
    //               >
    //                 Phone
    //               </Typography>

    //               <Link
    //                 sx={{
    //                   color: "inherit",
    //                   fontSize: "13px",
    //                 }}
    //                 href="tel:+18472291010"
    //                 underline="hover"
    //               >
    //                 (847) 229-1010
    //               </Link>
    //             </Box>
    //           </Stack>

    //           <Stack
    //             direction="row"
    //             spacing={1.5}
    //             sx={{
    //               display: "flex",
    //               alignItems: "flex-start",
    //             }}
    //           >
    //             <MailOutlineIcon />

    //             <Box>
    //               <Typography
    //                 sx={{
    //                   fontWeight: 600,
    //                   fontSize: "14px",
    //                 }}
    //               >
    //                 E-mail
    //               </Typography>

    //               <Link
    //                 href="mailto:harvestfresh24@gmail.com"
    //                 underline="hover"
    //                 sx={{ overflowWrap: "anywhere", color: "inherit", fontSize: "13px" }}
    //               >
    //                 harvestfresh24@gmail.com
    //               </Link>
    //             </Box>
    //           </Stack>
    //         </Stack>
    //       </Box>

    //       {/* RIGHT: CONTACT FORM */}
    //       <Box>
    //         <Typography
    //           variant="h5"
    //           sx={{
    //             fontWeight: 600,
    //             mb: 2,
    //           }}
    //         >
    //           Drop Us a Line
    //         </Typography>

    //         <Box component="form" onSubmit={handleSubmit}>
    //           <Box
    //             sx={{
    //               display: "grid",
    //               gridTemplateColumns: {
    //                 xs: "1fr",
    //                 sm: "1fr 1fr",
    //               },
    //               gap: 1.5,
    //             }}
    //           >
    //             <TextField
    //               name="name"
    //               placeholder="Name *"
    //               value={form.name}
    //               onChange={handleChange}
    //               required
    //               fullWidth
    //               size="small"
    //               sx={inputStyles}
    //             />

    //             <TextField
    //               name="phone"
    //               placeholder="Phone Number *"
    //               type="tel"
    //               value={form.phone}
    //               onChange={handleChange}
    //               required
    //               fullWidth
    //               size="small"
    //               sx={inputStyles}
    //             />

    //             <TextField
    //               name="email"
    //               placeholder="Email *"
    //               type="email"
    //               value={form.email}
    //               onChange={handleChange}
    //               required
    //               fullWidth
    //               size="small"
    //               sx={inputStyles}
    //             />

    //             <TextField
    //               name="address"
    //               placeholder="Address, City, Zip Code"
    //               value={form.address}
    //               onChange={handleChange}
    //               fullWidth
    //               size="small"
    //               sx={inputStyles}
    //             />
    //           </Box>

    //           <TextField
    //             name="message"
    //             placeholder="Message *"
    //             value={form.message}
    //             onChange={handleChange}
    //             required
    //             fullWidth
    //             multiline
    //             rows={5}
    //             sx={{
    //               ...inputStyles,
    //               mt: 1.5,
    //             }}
    //           />

    //           <FormControlLabel
    //             sx={{
    //               mt: 1,
    //               ml: 0,
    //               alignItems: "center",
    //             }}
    //             control={
    //               <Checkbox
    //                 checked={subscribe}
    //                 onChange={(event) => setSubscribe(event.target.checked)}
    //                 size="small"
    //                 sx={{
    //                   color: "#fff",
    //                   p: 0.5,
    //                   mr: 0.5,
    //                   "&.Mui-checked": {
    //                     color: "#fff",
    //                   },
    //                 }}
    //               />
    //             }
    //             label={
    //               <Typography
    //                 sx={{
    //                   fontSize: "11px",
    //                   lineHeight: 1.5,
    //                 }}
    //               >
    //                 I would like to receive information from XO Deli on exclusive offers that may be
    //                 of interest to me.
    //               </Typography>
    //             }
    //           />

    //           <Box sx={{ mt: 2 }}>
    //             <Button
    //               type="submit"
    //               variant="contained"
    //               sx={{
    //                 backgroundColor: "#333",
    //                 color: "#fff",
    //                 borderRadius: "30px",
    //                 px: 3,
    //                 py: 1,
    //                 fontSize: "13px",
    //                 textTransform: "none",
    //                 boxShadow: "none",

    //                 "&:hover": {
    //                   backgroundColor: "#222",
    //                   boxShadow: "none",
    //                 },
    //               }}
    //             >
    //               Send message
    //             </Button>
    //           </Box>

    //           <Typography
    //             sx={{
    //               mt: 1.5,
    //               fontSize: "11px",
    //               color: "rgba(255,255,255,0.8)",
    //             }}
    //           >
    //             * These fields are required.
    //           </Typography>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>
  );
};

export default ContactUsSection;
