function calculateAggregate() {
  const tam = parseInt(document.getElementById("tam").value);
  const am = parseInt(document.getElementById("am").value);
  const fam = tam - am;

  const tem = parseInt(document.getElementById("tem").value);
  const em = parseInt(document.getElementById("em").value);
  const fem = tem - em;

  const tbm = parseInt(document.getElementById("tbm").value);
  const bm = parseInt(document.getElementById("bm").value);
  const fbm = tbm - bm;

  const tiqm = parseInt(document.getElementById("tiqm").value);
  const iqm = parseInt(document.getElementById("iqm").value);
  const fiqm = tiqm - iqm;

  document.getElementById("results").innerHTML = `
  <div class="background-image" id="backgroundImage"></div>
  <h2>Erudite Coaching Centre</h2>
  <p style="font-weight:bold;" id="entryTestScore"></p>
  <p style="font-weight:bold;" id="aggregateScore"></p>
`;

  const EntryTest_percent =
    am +
    fam * -1 * 0.25 +
    em * 0.33 +
    fem * -0.33 * 0.25 +
    bm +
    fbm * -0.25 +
    iqm +
    fiqm * -0.25;
  const EntryTest_marks = EntryTest_percent.toFixed(2);

  document.getElementById("entryTestScore").innerText =
    "Your Entry test score is: " + EntryTest_marks;

  const obt_matric = parseInt(document.getElementById("obt_matric").value);
  const total_matric = parseInt(document.getElementById("total_matric").value);
  const percent_matric = (obt_matric / total_matric) * 100;
  const matric_agg = 0.5 * percent_matric;
  const entrytest_agg = 0.5 * EntryTest_percent;
  const Total_agg = (matric_agg + entrytest_agg).toFixed(2);

  document.getElementById("aggregateScore").innerText =
    "Your aggregate is: " + Total_agg;

  document.getElementById("results").innerHTML += `
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Total attempted advanced maths questions: ${tam}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Correct advanced maths answers: ${am}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Total attempted English questions: ${tem}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Correct English answers: ${em}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Total attempted basic maths questions: ${tbm}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Correct basic maths answers: ${bm}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Total attempted IQ questions: ${tiqm}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Correct IQ answers: ${iqm}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Obtained matric marks: ${obt_matric}</p>
    <p style="font-size: 0.7em; color: black; font-weight:bold; ">Total matric marks: ${total_matric}</p>
`;
}

function exportResults() {
  const resultsDiv = document.getElementById("results");
  html2canvas(resultsDiv).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg");
    link.download = "results.jpg";
    link.click();
  });
}
function showResults() {
  document.getElementById("backgroundImage").style.display = "block";
}
