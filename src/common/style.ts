export const customDataTableStyle = {
   table: {
      style: {
         //  fontFamily: "Roboto",
         fontSize: "16px",
      },
   },
   rows: {
      style: {
         minHeight: "72px", // override the row height
      },
   },
   headCells: {
      style: {
         paddingLeft: "8px", // override the cell padding for head cells
         paddingRight: "8px",
         fontWeight: "bold",
      },
   },
   cells: {
      style: {
         paddingLeft: "8px", // override the cell padding for data cells
         paddingRight: "8px",
      },
   },
};

export const customDataTableStyleExpanded = {
   table: {
      style: {
         //  fontFamily: "Roboto",
         fontSize: "15px",
      },
   },
   rows: {
      style: {
         minHeight: "50px", // override the row height
         background: "rgba(0, 0, 0, 0.12)",
      },
   },
   headCells: {
      style: {
         paddingLeft: "8px", // override the cell padding for head cells
         paddingRight: "8px",
         fontWeight: "bold",
         background: "rgba(0, 0, 0, 0.12)",
      },
   },
   cells: {
      style: {
         paddingLeft: "8px", // override the cell padding for data cells
         paddingRight: "8px",
      },
   },
};
