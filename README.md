# Petty Cash Book Manager (Analytical Imprest Ledger)

A comprehensive, real-time spreadsheet application built to run **100% offline on your desktop**. It provides an analytical imprest petty cash book with interactive financial dashboard KPI cards, live running cash balances, physical paper receipt camera scanning, digital receipt uploads (PDF, JPG, PNG, SVG), audit verification, and printable requisition claim forms.

---

## 🚀 How to Run on Desktop

You have multiple ways to run the manager on your computer:

### Option 1: 1-Click Desktop Launcher (Recommended)
1. Double-click **`Run_Petty_Cash_Manager.bat`**.
2. It automatically starts a tiny local server (using Python or Node.js) and opens the application in your default browser at `http://localhost:8080/petty_cash_book_manager.html`.
3. *Benefit:* Running via localhost grants the browser camera permission to use your **live desktop webcam/document camera** for real-time receipt scanning.

### Option 2: Direct Offline Double-Click
- Simply double-click **`petty_cash_book_manager.html`** in File Explorer.
- It will open immediately in Microsoft Edge, Google Chrome, Firefox, or Brave.
- All styles, vector icons, charts, and IndexedDB local database run **100% offline** without needing internet or any server.

### Option 3: Create a Desktop Shortcut
- Double-click **`Create_Desktop_Shortcut.bat`** to place an icon directly on your Windows Desktop labeled **"Petty Cash Book Manager"**.

---

## 📊 Dashboard KPI Cards

At the top of the application are 4 real-time KPI overview cards:

| KPI Card | Accounting Formula / Logic | Action / Feature |
| :--- | :--- | :--- |
| **Fixed Imprest Float** | Baseline allocation assigned to petty cashier (e.g., `$500.00` or `500,000 FCFA`) | Click **"Set Float"** to adjust baseline |
| **Total Disbursements** | $\sum \text{Paid Expenses in current cycle}$ | Displays percentage of float consumed and total voucher count |
| **Cash in Hand** | $\text{Total Received} - \text{Total Disbursed}$ | Visual health progress bar: Green (Safe), Amber (Moderate), Red (<20% Low Cash Warning) |
| **Reimbursement Due** | Total claim needed to replenish cash back to fixed float | Click **"Claim Form"** to generate official printable requisition form |

---

## 📑 Detailed Real-Time Analytical Spreadsheet

The main spreadsheet behaves like an accounting ledger with instant real-time recalculations:

1. **Date & Voucher #**: Standard chronological tracking.
2. **Particulars / Payee**: Vendor name and purpose of expense. **Click on any description** to edit it inline!
3. **Received (+)**: Imprest float allocation or replenishments.
4. **Paid (-)**: Expense disbursement amounts.
5. **Cash Balance (Running Balance)**: Automatically calculated chronologically row-by-row. You can see the exact cash in the tin after every single disbursement!
6. **Receipt Proof**:
   - `[Receipt OK]` (Green): Receipt is attached. Click to view high-resolution scan, zoom, rotate, download, or print.
   - `[⚠️ Missing]` (Amber/Dashed): Indicates missing paperwork. Click to instantly snap or upload the receipt!
7. **Analytical Expense Columns**:
   - **Stationery** (Paper, pens, toners, office supplies)
   - **Transport** (Taxi fares, logistics, courier, deliveries)
   - **Refreshment** (Coffee, milk, tea, client hospitality)
   - **Maintenance** (Office repairs, plumbing, hardware fixes)
   - **Sanitation** (Cleaning supplies, trash bags, disinfectants)
   - **Energy** (Generator fuel, electricity tokens, gas)
   - **Miscellaneous** (Newspapers, incidental charges)
8. **Live Footer Totals**: Sums for Received, Disbursed, Net Cash Position, and category subtotals update in real-time as you type.
9. **Quick Entry Bar**: Fast keyboard-friendly data entry row right above the table to log transactions rapidly like Excel.

---

## 📷 Receipt Scanning & Traceability (Paper & Digital)

### Physical Paper Receipts:
- Click **"Scan Receipt"** or click **"⚠️ Missing"** on any voucher row.
- Points your laptop webcam, document camera, or phone camera at the physical paper invoice or receipt.
- Align the bill within the scanning boundary box.
- Press the **Snap Button**.
- Choose post-processing filters:
  - **Original**: Standard color.
  - **High Contrast (Scan)**: Enhances printed text and whitens paper background.
  - **B&W Grayscale**: Archival document clarity.
- Rotate if needed (90° steps) and click **"Attach Scanned Receipt"**.

### Digital Receipts & Invoices:
- When adding or editing a voucher, drag and drop or browse for **PDF documents, JPG, PNG, or WEBP** files.
- Stored permanently in your browser's local **IndexedDB** database on your desktop computer.

### Receipt Viewer & Audit Lightbox:
- Click any green `[Receipt OK]` button to open the lightbox.
- Features: **Zoom In / Zoom Out**, **Rotate**, **Download Receipt File**, and **"Print Voucher"** (generates an official 1-page petty cash payment voucher with the attached receipt and signature spaces for Payee and Cashier).

---

## 🔄 Imprest Replenishment Workflow

When the cashier submits vouchers and management or the bank reimburses the cash:
1. Click **"Replenish Float"** in the header.
2. The modal automatically displays:
   - Current Cash in Hand
   - Approved Fixed Float
   - Calculated Replenishment Claim Due
3. Enter the cheque number or reference (e.g., `CHQ-8902`).
4. Click **"Confirm Replenishment"**.
5. A `received` entry with voucher `REIMB-XX` is added to the ledger, automatically restoring Cash in Hand back to 100% of the Fixed Float!

---

## 🖨️ Reports, Exports & Backup

- **Print Ledger**: Formats the entire analytical petty cash book into a clean A4 landscape printout for auditors.
- **Requisition Form**: Prints an official Petty Cash Requisition Form with category breakdown, approved float summary, and 3-tier signature blocks (Prepared By, Checked By, Approved By).
- **Export CSV**: Downloads the complete ledger as an Excel-compatible `.csv` spreadsheet with all analytical columns and receipt status.
- **Backup Database (.json)**: Exports all transactions, settings, and high-resolution scanned receipt images into a single file.
- **Restore Database**: Upload a backup file to restore your entire database on any computer.

