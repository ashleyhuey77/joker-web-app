import '../../../styles/Suites.css';
import GridLayout from "react-grid-layout";
export function SuitesContent() {
  const layout = [
    { i: "suites", x: 0, y: 0, w: 1, h: 2,
      static: false,
      isResizable: true,
      isBounded: true,
      resizeHandles: ['e'] },
    { i: "steps", x: 1, y: 1, w: 1, h: 2,
      static: false,
      isResizable: true,
      isBounded: true,
      resizeHandles: ['w']}
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={2}
      rowHeight={350}
      width={1200}
    >
      <div id="test-suites" key="suites">Suites</div>
      <div id="test-steps" key="steps">Steps</div>
    </GridLayout>
  );
}
