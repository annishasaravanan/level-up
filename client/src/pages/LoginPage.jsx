import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription 
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";
import { useToast } from "../hooks/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      emailOrUsername: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Login submitted", data);
      
      toast({
        title: "Login Successful",
        description: "Welcome back to Level Up",
        variant: "success",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <GlassCard className="w-full max-w-md shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2">
            Sign in to continue your learning journey
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold text-gray-800">Login Credentials</h2>
              </div>

              <FormField
                control={form.control}
                name="emailOrUsername"
                rules={{ required: "Email or username is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email or Username</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="john.doe@example.com or johndoe" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input 
                          type={showPassword ? "text" : "password"} 
                          placeholder="••••••••" 
                          {...field} 
                        />
                      </FormControl>
                      <button 
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <FormDescription className="text-xs">
                      <Link to="/forgot-password" className="text-blue-600 hover:underline">
                        Forgot Password?
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                      />
                    </FormControl>
                    <FormLabel className="text-sm cursor-pointer hover:text-gray-800">
                      Remember me for 30 days
                    </FormLabel>
                  </FormItem>
                )}
              />
            </section>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg py-6 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" className="opacity-25" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z" />
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Form>

        <Separator className="my-6" />

        <div className="space-y-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline font-medium">
              Create an account
            </Link>
          </p>
          
          {/* <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <AlertCircle size={16} />
            <span>Secure login with industry-standard encryption</span>
          </div> */}

          {/* Social Login Options (placeholder) */}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Or sign in with</p>
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                className="w-12 h-12 rounded-full p-0 hover:bg-gray-100 transition-colors"
                disabled
              >
                <span className="text-gray-400">G</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-12 h-12 rounded-full p-0 hover:bg-gray-100 transition-colors"
                disabled
              >
                <span className="text-gray-400">F</span>
              </Button>
            </div>
            {/* <p className="text-xs text-gray-400 mt-2">Social login coming soon</p> */}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default LoginPage;