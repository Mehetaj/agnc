"use client";
import bgImage from "../../../../asset/dashborad/login/Containers.png";
import Image from "next/image";
import Component from "@/app/Shared/Component/Component";
import DashboardBtn from "@/app/Shared/DashboardButton/DashboardButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

function DashLogin() {
  const users = [
    {
      email: "admin@user.com",
      password: "admin",
      role: "admin",
    },
    {
      email: "moderator@user.com",
      password: "moderator",
      role: "moderator",
    },
    {
      email: "user@user.com",
      password: "user",
      role: "user",
    },
  ];

  const router = useRouter();

  // login  form data
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const filtered = users.find(
      (user) => user.email == data.email && user.password == data.password
    );
    console.log(filtered);

    // get user role and navigate

    if (filtered?.role == "user") {
      router.push("/dashboard/user")
      alert("You are user");
    } else if (filtered?.role == "moderator") {
      router.push("/dashboard/moderator")
      alert("You are moderator");
    } else if (filtered?.role == "admin") {
      router.push("/dashboard/admin")
      alert("You are admin");
    } else {
      alert("Invalid User type");
    }
  };

  return (
    <div>
      {/* a login system with 1/1 grid. one side with image and other with form */}
      <Component>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image className="max-w-full " src={bgImage} alt="" />
          <div className="w-full">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="justify-center items-start">
                <div className="my-4">
                  <h1 className="text-3xl font-bold">
                    Welcome to ByteZenith! 👋
                  </h1>
                  <p>Please sign in to your account and start adventure</p>
                  <div className=""></div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-center items-start"
                  >
                    {/* input with label */}
                    <label htmlFor="username">Email or Username</label>
                    <input
                      {...register("email")}
                      type="text"
                      placeholder="Username"
                      className="w-96 h-12 border rounded-md px-2 my-2"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="Password"
                      className="w-96 h-12 border  rounded-md px-2 my-2"
                    />
                    <DashboardBtn>Sign In</DashboardBtn>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Component>
    </div>
  );
}

export default DashLogin;
