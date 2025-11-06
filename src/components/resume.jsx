import "../styles/resume.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Resume({ generalInfo, eduInfo, expInfo }) {
  const handleDownload = async () => {
    const resumeElement = document.querySelector(".resume");
    if (!resumeElement) return;

    // ✅ Clone resume and make it full A4 size for capture
    const clone = resumeElement.cloneNode(true);
    clone.style.width = "210mm";
    clone.style.minHeight = "297mm";
    clone.style.padding = "20mm";
    clone.style.backgroundColor = "white";
    clone.style.position = "fixed";
    clone.style.top = "-10000px";
    clone.style.left = "0";
    clone.style.zIndex = "-1";
    document.body.appendChild(clone);

    // ✅ Capture clone as canvas
    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // ✅ Fit to one page exactly
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${generalInfo.fullname}_Resume.pdf`);

    // ✅ Clean up clone
    document.body.removeChild(clone);
  };

  return (
    <div className="resume-container">
      <div className="resume">
        <div className="header">
          <div className="name">
            <h1>{generalInfo.fullname}</h1>
          </div>

          <div className="header-details">
            <p>{generalInfo.phone}</p>
            <p>|</p>
            <p>{generalInfo.email}</p>
            <p>|</p>
            <p>{generalInfo.linkedin}</p>
            <p>|</p>
            <p>{generalInfo.github}</p>
          </div>
        </div>

        <div className="eduSection">
          <h2>EDUCATION</h2>
          
          <div className="top">
            <p>
              <b>{eduInfo.school}</b>
            </p>
            <p>{eduInfo.location}</p>
          </div>
          <div className="bottom">
            <p>
              <i>{eduInfo.degree}</i>
            </p>
            <p>
              <i>Expected {eduInfo.gradDate}</i>
            </p>
          </div>
        </div>

        <div className="expSection">
          <h2>EXPERIENCE</h2>
        

          <div className="jobs">
            {expInfo.map((exp, index) => (
              <div className="exp" key={index}>
                <div className="top">
                  <p>
                    <b>{exp.position}</b>
                  </p>
                  <p>
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <div className="bottom">
                  <p>
                    <i>{exp.company}</i>
                  </p>
                  <p>
                    <i>{exp.location}</i>
                  </p>
                </div>

                <div className="tasks">
                  <ul>
                    <li>{exp.tasks}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Download button (stays outside printable area) */}
      <button
        onClick={handleDownload}
        className="download-btn bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Download PDF
      </button>
    </div>
  );
}
