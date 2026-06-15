import MainLayout from "../layouts/MainLayout";

function Profile() {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  return (
    <MainLayout>

      <div className="bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-5">
          Profile
        </h1>

        <p>
          Name: {user?.name}
        </p>

        <p>
          Role: {user?.role}
        </p>

      </div>

    </MainLayout>
  );
}

export default Profile;