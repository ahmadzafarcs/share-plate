import { useState } from "react";

export default function Profile() {
  const [data, setData] = useState([
    { sr: 1, name: "Apples", serving: 2, status: "donated" },
    { sr: 2, name: "Pizza", serving: 1, status: "remained" },
    { sr: 3, name: "Pasta", serving: 2, status: "donated" },
    { sr: 4, name: "Wine", serving: 5, status: "remained" },
  ]);
  const [item, setItem] = useState({ name: "", serving: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setData([
      ...data,
      {
        sr: data.length + 1,
        name: item.name,
        serving: item.serving,
        status: "remained",
      },
    ]);
    setItem({ name: "", serving: "" });
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-start gap-1">
        {/* Profile */}
        <div className="w-10 h-10 bg-stone-200 rounded-full"></div>
        <h1 className="text-xl">Ahmad Zafar</h1>
        <p className="text-sm font-slate-800 italic">+923088039985</p>
      </div>
      <section>
        <div>
          {/* <button className="py-2 px-4 bg-slate-800 text-slate-100 rounded cursor-pointer hover:bg-slate-700 transition duration-300">
            Add Donation
          </button>*/}
          <form onSubmit={handleSubmit}>
            <table className="my-8">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Serivng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      value={item.name}
                      onChange={(e) =>
                        setItem({ ...item, name: e.target.value })
                      }
                      placeholder="Biryani"
                      className="py-2 px-4 bg-slate-100  rounded cursor-pointer"
                    />
                  </td>
                  <td>
                    <input
                      value={item.serving}
                      onChange={(e) =>
                        setItem({ ...item, serving: e.target.value })
                      }
                      placeholder="eg: 1, 3"
                      className="py-2 px-4 bg-slate-100  rounded cursor-pointer"
                    />
                  </td>
                  <td>
                    <button className="py-2 px-4 bg-slate-800 text-slate-100 rounded cursor-pointer hover:bg-slate-700 transition duration-300">
                      Donate
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div>
          <h3 className="my-2 text-sm text-stone-700">Your Donations</h3>
          <table className="w-full">
            <thead className=" bg-stone-200 font-semibold">
              <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Serving</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => {
                return (
                  <tr
                    key={d.sr}
                    className={`${i % 2 == 0 ? "bg-white" : "bg-slate-100"}`}
                  >
                    <td>{d.sr}</td>
                    <td>{d.name}</td>
                    <td>{d.serving}</td>
                    <td
                      className={
                        d.status === "remained"
                          ? "text-rose-800"
                          : "text-green-800"
                      }
                    >
                      {d.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
