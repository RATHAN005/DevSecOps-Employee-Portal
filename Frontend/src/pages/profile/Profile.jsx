import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ProfileCard from "../../components/profile/ProfileCard";
import ProfileForm from "../../components/profile/ProfileForm";
import ChangePassword from "../../components/profile/ChangePassword";

/**
 * Profile page
 */
const Profile = () => {
  const { user } = useContext(AuthContext);

  const handleProfileSave = async (data) => {
    // TODO: call updateProfile API
    console.log("Saving profile:", data);
  };

  const handlePasswordChange = async (data) => {
    // TODO: call changePassword API
    console.log("Changing password:", data);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>
      <ProfileCard user={user} />
      <ProfileForm user={user} onSubmit={handleProfileSave} />
      <ChangePassword onSubmit={handlePasswordChange} />
    </div>
  );
};

export default Profile;
