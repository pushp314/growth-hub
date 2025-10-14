"use client";
import Image from 'next/image';

const plans = [
  {
    heading: "Startup",
    price: 3400,
    user: 'per user, per month',
    button: "Start My 15-day Trial",
    profiles: '5 Social Profiles',
    posts: '5 Scheduled Posts Per Profile',
    templates: "400+ Templates",
    view: "Calendar View",
    support: '24/7 Support',
  },
  {
    heading: "Business",
    price: 2400,
    user: 'per user, per month',
    button: "Start My 15-day Trial",
    profiles: '10 Social Profiles',
    posts: '5 Scheduled Posts Per Profile',
    templates: "600+ Templates",
    view: "Calendar View",
    support: '24/7 VIP Support',
  },
  {
    heading: "Agency",
    price: 11500,
    user: 'per user, per month',
    button: "Start My 15-day Trial",
    profiles: '100 Social Profiles',
    posts: '100 Scheduled Posts Per Profile',
    templates: "800+ Templates",
    view: "Calendar View",
    support: '24/7 VIP Support',
  },
];

const Manage = () => {
  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Manage All Your Social Media <br /> Profiles From One Place.
        </h3>


        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {plans.map((plan, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{plan.heading}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">₹{plan.price}</h2>
              <p className="text-sm font-medium text-darkgrey mb-6">{plan.user}</p>
              <button className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6">
                {plan.button}
              </button>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">{plan.profiles}</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">{plan.posts}</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">{plan.templates}</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">{plan.view}</h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">{plan.support}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
