import React from "react";

export default function OffersCard() {
  return (
    <div>
      <div>
        <div className="offers-deco">
          <div className="offers-deco-inside">
            <p className="item-deco">
              <LiaShippingFastSolid />
            </p>
            <span className="text-deco">
              Free <br />
              shipping
            </span>
          </div>
        </div>
        <div className="text-2-deco">
          <p>
            Get free shipping on <br />
            order above 999/- only <br /> TnC* Apply
          </p>
        </div>
      </div>
    </div>
  );
}
