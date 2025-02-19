import type { ReactComponent } from "../../../types";
import { filters, waitForModule } from "../webpack";

export type FlexType = ReactComponent<{
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  shrink?: number;
  grow?: number;
  basis?: string;
}> & {
  Direction: Record<"HORIZONTAL" | "HORIZONTAL_REVERSE" | "VERTICAL", string>;
  Align: Record<"BASELINE" | "CENTER" | "END" | "START" | "STRETCH", string>;
  Justify: Record<"AROUND" | "BETWEEN" | "CENTER" | "END" | "START", string>;
  Wrap: Record<"WRAP" | "NO_WRAP" | "WRAP_REVERSE", string>;
  Child: ReactComponent<{
    shrink?: number;
    grow?: number;
    basis?: string;
    wrap?: boolean;
  }>;
};

const mod = await waitForModule(filters.bySource("HORIZONTAL_REVERSE:"));

export default mod as FlexType;
