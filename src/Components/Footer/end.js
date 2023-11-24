import React from "react";

export default function FooterBar() {
  return (
    <div
      style={{
        backgroundColor: "orange",
        fontWeight: "700",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <div className="container">
        <div
          style={{
            justifyContent: "space-between",
            padding: "3",
            flexDirection: "row",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ justifyContent: "flex-start" }}>
              <p>Tranetech - Best ERP Software Company.</p>
            </div>
            <div style={{ justifyContent: "flex-end" }}>
              <p>© 2023 Tranetech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
