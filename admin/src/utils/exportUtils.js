import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

/**
 * Export data array to Excel (.xlsx) file
 * @param {Array<Object>} data - Flattened/formatted object array
 * @param {string} fileName - Destination file name without extension
 * @param {string} sheetName - Worksheet title
 */
export function exportToExcel(data, fileName = 'export', sheetName = 'Sheet1') {
  if (!data || data.length === 0) {
    alert('No data available to export.');
    return;
  }

  // Create worksheet and workbook
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Auto-fit column widths based on content
  const colWidths = Object.keys(data[0] || {}).map((key) => {
    const maxLen = Math.max(
      key.length,
      ...data.map((row) => (row[key] ? String(row[key]).length : 0))
    );
    return { wch: Math.min(Math.max(maxLen + 3, 12), 40) };
  });
  worksheet['!cols'] = colWidths;

  // Generate date stamp
  const dateStr = new Date().toISOString().split('T')[0];
  XLSX.writeFile(workbook, `${fileName}_${dateStr}.xlsx`);
}

/**
 * Export structured table data to PDF (.pdf) file
 * @param {Object} options
 * @param {string} options.title - Document header title
 * @param {string} options.subtitle - Secondary subtitle
 * @param {Array<string>} options.headers - Array of column header titles
 * @param {Array<Array<any>>} options.rows - 2D array of row cells
 * @param {string} options.fileName - Destination file name without extension
 */
export function exportToPDF({
  title = 'IVIPL Export Report',
  subtitle = 'Investvedya Infratech Real Estate Platform',
  headers = [],
  rows = [],
  fileName = 'report'
}) {
  if (!rows || rows.length === 0) {
    alert('No data available to export.');
    return;
  }

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const dateStr = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  // Header Banner Background
  doc.setFillColor(11, 28, 52); // Deep Navy (#0b1c34)
  doc.rect(0, 0, pageWidth, 55, 'F');

  // Header Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(245, 208, 124); // Gold / Champagne (#f5d07c)
  doc.text(title.toUpperCase(), 25, 30);

  // Subtitle & Export Date
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(203, 213, 225); // Slate 300
  doc.text(subtitle, 25, 45);

  doc.text(`Generated on: ${dateStr}`, pageWidth - 25, 35, { align: 'right' });
  doc.text(`Total Records: ${rows.length}`, pageWidth - 25, 47, { align: 'right' });

  // Render Table
  autoTable(doc, {
    head: [headers],
    body: rows,
    startY: 68,
    margin: { left: 25, right: 25, bottom: 30 },
    theme: 'grid',
    headStyles: {
      fillColor: [18, 38, 68],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 9,
      halign: 'left',
      cellPadding: 6
    },
    bodyStyles: {
      textColor: [30, 41, 59],
      fontSize: 8.5,
      cellPadding: 5.5,
      valign: 'middle'
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252]
    },
    styles: {
      overflow: 'linebreak',
      cellWidth: 'auto'
    },
    didDrawPage: (data) => {
      // Page numbering footer
      const pageCount = doc.internal.getNumberOfPages();
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(
        `Page ${data.pageNumber} of ${pageCount} — Confidential • Investvedya Infratech (IVIPL)`,
        pageWidth / 2,
        doc.internal.pageSize.getHeight() - 12,
        { align: 'center' }
      );
    }
  });

  const fileDate = new Date().toISOString().split('T')[0];
  doc.save(`${fileName}_${fileDate}.pdf`);
}
