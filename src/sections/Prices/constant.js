export const plans = [
  {
    type: "Free",
    status: null,
    cost: "$0",
    cost_time: "monthly",
    btn: {
      label: "Get started for free",
      url: "/",
    },
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    type: "Pro",
    status: "Most Popular",
    cost: "$9",
    cost_time: "monthly",
    btn: {
      label: "Sign up now",
      url: "/",
    },
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    type: "Business",
    status: null,
    cost: "$19",
    cost_time: "monthly",
    btn: {
      label: "Sign up now",
      url: "/",
    },
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];
export default plans;
