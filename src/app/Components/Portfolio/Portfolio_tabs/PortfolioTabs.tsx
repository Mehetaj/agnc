"use client"
import { portfolio_data } from "@/app/FakeData/portfolio";
import Single_portfolio from '../../Home/Portfolio/singleportfolio';
function classNames(...classes : any | string[] | string | object) {
  return classes.filter(Boolean).join(' ')
}


export default function Portfolio_tabs() {
  const categorizedData: any = {
    "View all": [...portfolio_data], // Create a "View all" category with a copy of all data
};

  portfolio_data.forEach(item => {
      const { category, ...rest } = item;
      if (!categorizedData[category]) {
          categorizedData[category] = [];
      }
      categorizedData[category].push(rest);
  });

 let categories = categorizedData;

  return (
    <div className="w-full  mx-auto px-2 py-16 sm:px-0">
      {/* <Tab.Group>
        <Tab.List className="flex max-w-[932px] py-4 mx-auto space-x-1 rounded-r-full text-[20px] rounded-l-full bg-[#D6E6FF] p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected  }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                  ' ',
                  selected
                    ? 'font-extrabold'
                    : ''
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((category:any, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                ''
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
                {category.map((data:any) => (
                  <Single_portfolio key={data.id} data={data} id={0} img={''} category={''} name={''}></Single_portfolio>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group> */}
    </div>
  )
}
