import CardList from "@/components/CardList";
import Cards from "@/components/Cards";
import CTA from "@/components/CTA";

import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {

  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1 className="text-2xl underline">Dashboard Aviora</h1>
      <section className="home-section">

        {companions.map((companion) => (
          
          <Cards
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CardList
          title="Recently Completed Sessions"
          companions={recentSessionCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
