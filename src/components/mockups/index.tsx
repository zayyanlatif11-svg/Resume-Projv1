import type { MockupKey } from "@/data/caseStudies";
import { SearchFundCrm } from "./SearchFundCrm";
import { AddbackScrubber } from "./AddbackScrubber";
import { CreTracker } from "./CreTracker";
import { RiskLedger } from "./RiskLedger";
import { PostTrade } from "./PostTrade";
import { InternshipTracker } from "./InternshipTracker";

const registry: Record<MockupKey, () => JSX.Element> = {
  "search-fund-crm": SearchFundCrm,
  "addback-scrubber": AddbackScrubber,
  "cre-tracker": CreTracker,
  riskledger: RiskLedger,
  "post-trade": PostTrade,
  "internship-tracker": InternshipTracker,
};

export function Mockup({ mockup }: { mockup: MockupKey }) {
  const Component = registry[mockup];
  return <Component />;
}
