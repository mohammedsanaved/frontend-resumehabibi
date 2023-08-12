import React from "react";

const Benefits = () => {
  const BenefitsData = [
    {
      img_url: "assets/images/benifit-1.png",
      title: "Easy to use",
      description:
        "The process of writing a resume is substantially sped up and simplified by using our resume builder",
    },
    {
      img_url: "assets/images/benifit-2.png",
      title: " Secure ",
      description:
        " We respect your privacy & give you control over your content and your data with us.",
    },
    {
      img_url: "assets/images/benifit-3.png",
      title: "  Cool Templates",
      description: "Our template designs help your resume standout in a pool of others. ",
    },
    {
      img_url: "assets/images/benifit-4.png",
      title: "Intelligent Design ",
      description:
        "With us, you won&#39;t have to bother about the minute details of resume development,such as font choice, layout, etc.",
    },
    {
      img_url: "assets/images/benifit-5.png",
      title: " HR-Approved & ATS-Friendly",
      description:
        "The core design of our resume templates are HR-Approved & accepted by leading organizations.",
    },
    {
      img_url: "assets/images/benifit-6.png",
      title: " No Hidden Charges ",
      description:
        " We’ve got a free version and our premium pricing is clear. We notify you about any new changes in good time.",
    },
  ];
  return (
    <div className="mb-[10rem]">
      <div className="flex justify-center">
        <h1 className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
          Benefits Of Using Our Product
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="text-secondary text-3xl font-semibold">Why Choose Us?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {BenefitsData.map((benefit, index) => {
          return (
            <div key={index} className="flex items-center gap-4 p-10">
              <div className="w-[6.625rem] h-[6rem] pt-[2rem] flex-shrink-0">
                <img src={benefit.img_url} alt={`benifit-${index + 1}`} />
              </div>
              <div className="flex flex-col justify-center gap-4">
                <div className="font-quicksand text-3xl font-semibold leading-normal tracking-tight">
                  {benefit.title}
                </div>
                <div className=" text-sm  ">{benefit.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Benefits;

{
  /*  <div className="flex flex-wrap">
        <div className="flex items-center gap-4 p-10 ">
          <div className="w-[6.625rem] h-[7.375rem] flex-shrink-0">
            <img src="assets/images/benifit-1.png" alt="benifit-1" />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="font-quicksand text-3xl font-semibold leading-normal tracking-tight">
              Easy to use
            </div>
            <div>
              The process of writing a resume is substantially sped up and simplified by using our
              resume builder.
            </div>
          </div>
        </div>
    
        <div className="flex items-center gap-4 p-10">
          <div className="w-[6.625rem] h-[7.375rem] flex-shrink-0">
            <img src="assets/images/benifit-2.png" alt="benifit-1" />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="font-quicksand text-3xl font-semibold leading-normal tracking-tight">
              Secure
            </div>
            <div>
              We respect your privacy & give you control over your content and your data with us.
            </div>
          </div>
        </div>
      
        <div className="flex items-center gap-4 p-10">
          <div className="w-[6.625rem] h-[7.375rem] flex-shrink-0">
            <img src="assets/images/benifit-3.png" alt="benifit-1" />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="font-quicksand text-3xl font-semibold leading-normal tracking-tight">
              Cool Templates
            </div>
            <div>Our template designs help your resume standout in a pool of others.</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-10">
          <div className="w-[6.625rem] h-[7.375rem] flex-shrink-0">
            <img src="assets/images/benifit-4.png" alt="benifit-1" />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="font-quicksand text-3xl font-semibold leading-normal tracking-tight">
              Intelligent Design
            </div>
            <div>
              With us, you won&#39;t have to bother about the minute details of resume development,
              such as font choice, layout, etc.
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 p-10">
          <div className="w-[6.625rem] h-[7.375rem] flex-shrink-0">
            <img src="assets/images/benifit-5.png" alt="benifit-1" />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="font-quicksand text-3xl font-semibold leading-normal tracking-tight">
              {" "}
              HR-Approved & ATS-Friendly
            </div>
            <div>
              The core design of our resume templates are HR-Approved & accepted by leading
              organizations.
            </div>
          </div>
        </div>
      
        <div className="flex items-center gap-4 p-10">
          <div className="w-[6.625rem] h-[7.375rem] flex-shrink-0">
            <img src="assets/images/benifit-6.png" alt="benifit-1" />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="font-quicksand text-3xl font-semibold leading-normal tracking-tight">
              No Hidden Charges
            </div>
            <div>
              We’ve got a free version and our premium pricing is clear. We notify you about any new
              changes in good time.
            </div>
          </div>
        </div> 
      </div>*/
}
