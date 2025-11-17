import { CartBtn } from "./cart-btn";
import { ToggleBtn } from "./toggle-btn";

export function ActionsSection() {
    return (
        <div className="actions-section">
            <CartBtn />
            <ToggleBtn />
        </div>
    );
}
