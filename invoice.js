document.addEventListener("DOMContentLoaded", function () {
    // You can add code here to retrieve and display the invoice details
    // This may include fetching data from the server or local storage
    const invoiceContainer = document.querySelector(".invoice-container");

    // Example data (replace with your actual invoice data)
    const invoiceData = {
        invoiceNumber: "INV-12345",
        date: "2023-09-10",
        customerName: "John Doe",
        items: [
            { description: "Product 1", quantity: 2, unitPrice: 50, total: 100 },
            { description: "Product 2", quantity: 3, unitPrice: 30, total: 90 },
        ],
        subtotal: 190,
        gst: 19,
        totalAmount: 209,
    };

    // Create HTML structure for the invoice
    const invoiceHTML = `
        <div class="invoice-header">
            <h2>Invoice ${invoiceData.invoiceNumber}</h2>
            <p>Date: ${invoiceData.date}</p>
        </div>
        <div class="customer-details">
            <h3>Customer Details:</h3>
            <p>Name: ${invoiceData.customerName}</p>
        </div>
        <div class="invoice-items">
            <h3>Invoice Items:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoiceData.items.map(item => `
                        <tr>
                            <td>${item.description}</td>
                            <td>${item.quantity}</td>
                            <td>${item.unitPrice}</td>
                            <td>${item.total}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <div class="invoice-summary">
            <p>Subtotal: ${invoiceData.subtotal}</p>
            <p>GST (10%): ${invoiceData.gst}</p>
            <p>Total Amount: ${invoiceData.totalAmount}</p>
        </div>
    `;

    invoiceContainer.innerHTML = invoiceHTML;
});
