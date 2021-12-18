import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
const ProfileCard = () => {
  const [data, setData] = useState("");

  const theme = useTheme();

  const fetchedData = async () => {
    const response = await fetch(
      "https://api.meetworks.in/users/get_unique_jobseeker_profile",
      {
        method: "POST",
        body: new URLSearchParams({
          jobseeker_id: "614b410c2c4b197356a37f18",
        }),
      }
    ).then((response) => response.json());
    console.log(response[0].user_experiences[0].company_name.slice(0, 5));
    setData(response);
  };

  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <Card
      sx={{
        display: "flex",
        width: "70%",
      }}
      elevation={4}
    >
      {data.length > 0 && (
        <>
          <CardMedia
            component="img"
            sx={{ width: 390, height: 550 }}
            image={data[0].user_image_url}
            alt="Live from space album cover"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              marginLeft: "20px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
              }}
            >
              <Typography
                component="div"
                variant="p"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                {data[0].jobseeker_name}
              </Typography>
              <Box
                sx={{
                  borderLeft: "2px solid #14967b",
                  height: "22px",
                  margin: "0 10px",
                }}
              />
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LocationOnIcon
                  fontSize="small"
                  sx={{ color: "#14967b", marginRight: "5px" }}
                />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="p"
                  sx={{
                    fontSize: "15px",
                  }}
                >
                  {data[0].area}, {data[0].distric}
                </Typography>
              </Box>
            </CardContent>
            <Box component="div">
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center", pl: 2, pb: 1 }}
              >
                <BusinessCenterIcon
                  fontSize="medium"
                  sx={{ color: "#14967b", marginRight: "10px" }}
                />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="p"
                  sx={{
                    fontSize: "15px",
                    pt: 1,
                    color: "#14967b",
                  }}
                >
                  EXPERIENCE
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="p"
                  sx={{
                    fontSize: "10px",
                    pt: 1,
                    background: "#14967b",
                    color: "#fff",
                    p: "2px 10px",
                    ml: 2,
                    borderRadius: "5px",
                  }}
                >
                  {`${(data[0].total_months_exp / 12) | 0}` +
                    "." +
                    `${data[0].total_months_exp % 12}` +
                    " yrs Exp"}
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  pl: 2,
                  pb: 1,
                }}
              >
                {data[0]?.user_experiences
                  .map((exp, index) => (
                    <>
                      <Box
                        component="div"
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: 50, height: 30, marginLeft: "-30px" }}
                          image={exp.company_logo}
                          // alt={
                          //   exp.company_name !== null ||
                          //   exp.company_name !== undefined
                          //     ? exp.company_name.slice(0, 5)
                          //     : "none"
                          // }
                        />
                        <Box
                          component="div"
                          sx={{ display: " flex", flexDirection: "column" }}
                        >
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="h6"
                            sx={{
                              fontSize: "18px",
                              fontWeight: 600,
                              pt: 1,
                            }}
                          >
                            {exp?.company_name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="p"
                            sx={{
                              fontSize: "17px",
                            }}
                          >
                            {exp?.experience_type}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="p"
                        sx={{
                          fontSize: "15px",
                          ml: "35px",
                        }}
                      >
                        {exp?.company_starting_date} -{" "}
                        {exp?.company_ending_date}
                      </Typography>
                    </>
                  ))
                  .slice(0, 2)}
              </Box>
            </Box>

            <Box component="div">
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 2,
                  pb: 1,
                  mt: 3,
                }}
              >
                <SchoolIcon
                  fontSize="medium"
                  sx={{ color: "#14967b", marginRight: "10px" }}
                />
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="p"
                  sx={{
                    fontSize: "15px",
                    pt: 1,
                    color: "#14967b",
                  }}
                >
                  EDUCATION
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pl: 2,
                  pb: 1,
                  ml: "35px",
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    pt: 1,
                  }}
                >
                  {data[0].user_qualifications[0].course_abbreviation} -{" "}
                  {data[0].user_qualifications[0].course_name}
                </Typography>
                <Box
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="p"
                    sx={{
                      fontSize: "17px",
                    }}
                  >
                    {data[0].user_qualifications[0].user_college}
                  </Typography>
                  <Box
                    sx={{
                      borderLeft: "1px solid #000",
                      height: "15px",
                      margin: "0 5px",
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="p"
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    undefined -{" "}
                    {data[0].user_qualifications[0].user_passing_year}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Card>
  );
};

export default ProfileCard;
