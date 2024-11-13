"use client";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


type AuthInfo = {
  username?: string;
  email: string;
  password: string;
}

type additionalInfo = {
  confirmPassword?: string;
  type: "Login" | "Signup";
}

export default function authPage() {
  const [formData, setFormData] = useState<AuthInfo>({
    email: "",
    password: "",
    username: "",
  });

  const [addinfo, setAddInfo] = useState<additionalInfo>({
    confirmPassword: "",
    type: "Login",
  });
  const [errors, setErrors] = useState({ email: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Invalid email address",
      })
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // handle login logic here
  }

  function toggleAuth(){
    if(addinfo.type === "Login"){
      setAddInfo({
        ...addinfo,
        type: "Signup"
      });
    }else{
      setAddInfo({
        ...addinfo,
        type: "Login"
    })
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
    <Card className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full md:w-1/3">
      <CardHeader>
        <CardTitle>{addinfo.type}</CardTitle>
        <CardDescription>
          {addinfo.type === "Login"
            ? "Log in to your existing account"
            : "Create a new account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {
            addinfo.type === "Signup" && (
              <div>
                <Input
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
            )
          }
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {
            addinfo.type === "Signup" && (
              <div>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={addinfo.confirmPassword}
                  onChange={(e) => setAddInfo({ ...addinfo, confirmPassword: e.target.value })}
                />
              </div>
            )
          }
          <p className="text-sm text-right">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </p>
          <Button type="submit" variant="secondary" className="w-full">{addinfo.type}</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline" onClick={toggleAuth}>
            {addinfo.type === "Login" ? "Sign up" : "Log in"}
          </a>
        </p>
      </CardFooter>
    </Card>
    </div>
  )
}
