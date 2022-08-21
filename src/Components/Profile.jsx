import React, { useEffect } from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../Redux/AuthReducer/action";

const Profile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.AuthReducer.profileData);

  useEffect(() => {
    if (profileData.length === 0) {
      const token = localStorage.getItem("token");
      const payload = {
        username: "masai-school",
        token,
      };

      dispatch(profile(payload));
    }
  }, [dispatch, profileData.length]);
  console.log(profileData);
  return (
    <Box>
      <Flex direction="row" padding="0.5rem">
        <Box width="30%">
          <Avatar name={profileData.username} />
        </Box>
        <Flex direction="column" width="70%">
          <Text fontWeight="bold" fontSize="18px">
            {profileData.username}
          </Text>
          <Text>{profileData.description}</Text>
        </Flex>
      </Flex>
      <Box textAlign="right" paddingRight="0.5rem">
        <Button variant="link">View profile</Button>
      </Box>
    </Box>
  );
};

export default Profile;
