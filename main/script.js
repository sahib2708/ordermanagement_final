document.addEventListener("DOMContentLoaded", function () {
    // Function to load employee data (replace with actual data retrieval)
    function loadEmployeeData() {
        return {
            employeeId: "12345",
            lastLoggedIn: "2023-09-07 10:30 AM",
        };
    }

    // Function to load order data (replace with actual data retrieval)
    function loadOrderData() {
        return [
            {
                orderId: 1,
                customerName: "John Doe",
                orderDate: "2023-09-07",
                orderValue: "$500.00",
                customerCity: "New York",
                status: "Approved",
            },
            {
                orderId: 2,
                customerName: "Jane Smith",
                orderDate: "2023-09-06",
                orderValue: "$300.00",
                customerCity: "Los Angeles",
                status: "Completed",
            },
        ];
    }

    // Function to display orders on the Employee Dashboard
    function displayOrders() {
        const employeeInfo = loadEmployeeData();
        const orderData = loadOrderData();

        // Populate employee information
        document.getElementById("employee-id").textContent = employeeInfo.employeeId;
        document.getElementById("last-logged-in").textContent = employeeInfo.lastLoggedIn;

        // Populate order list
        const orderList = document.getElementById("order-list");
        orderData.forEach(function (order) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <p>Order ID: <span>${order.orderId}</span></p>
                <p>Customer Name: <span>${order.customerName}</span></p>
                <p>Order Date: <span>${order.orderDate}</span></p>
                <p>Order Value: <span>${order.orderValue}</span></p>
                <p>Customer City: <span>${order.customerCity}</span></p>
                <p>Status: <span>${order.status}</span></p>
            `;

            if (order.status === "Approved" || order.status === "Completed") {
                const viewInvoiceBtn = document.createElement("button");
                viewInvoiceBtn.className = "view-invoice-btn";
                viewInvoiceBtn.textContent = "View Invoice";

                viewInvoiceBtn.addEventListener("click", function () {
                    // Handle viewing the invoice for this order (replace with actual code)
                    alert(`Viewing invoice for Order ID: ${order.orderId}`);
                });

                listItem.appendChild(viewInvoiceBtn);
            }

            orderList.appendChild(listItem);
        });
    }

    // Check if we are on the Employee Dashboard Page
    if (window.location.pathname.endsWith("employee-dashboard.html")) {
        displayOrders();
    }

    // Check if we are on the Employee Login Page
    if (window.location.pathname.endsWith("employee-login.html")) {
        const employeeLoginForm = document.getElementById("employee-login-form");

        employeeLoginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const employeeId = document.getElementById("employee-id").value;
            const password = document.getElementById("password").value;

            // Example: Send a request to the server for authentication
            // You would replace this with actual API calls
            authenticateEmployee(employeeId, password);
        });

        function authenticateEmployee(employeeId, password) {
            // Example: Check employee credentials on the server
            // Replace this with your actual authentication logic
            // If authentication is successful, navigate to the Employee Dashboard Page
            if (employeeId === "Sahib" && password === "kapoor") {
                navigateToEmployeeDashboard();
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }
    }

    // Check if we are on the Create New Quote Page
    if (window.location.pathname.endsWith("create-new-quote.html")) {
        const createQuoteForm = document.getElementById("create-quote-form");
        const shippingCostInput = document.getElementById("shipping-cost");
        const totalOrderValueInput = document.getElementById("total-order-value");

        createQuoteForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Gather form data
            const orderDate = document.getElementById("order-date").value;
            const customer = document.getElementById("customer").value;
            const gstNo = document.getElementById("gst-no").value;
            const shippingAddress = document.getElementById("shipping-address").value;
            const city = document.getElementById("city").value;
            const phoneNumber = document.getElementById("phone-number").value;
            const email = document.getElementById("email").value;
            const pinCode = document.getElementById("pin-code").value;

            // Example: Get selected products
            const selectedProducts = [];
            const productCheckboxes = document.querySelectorAll('input[name="products"]:checked');
            productCheckboxes.forEach(function (checkbox) {
                selectedProducts.push(checkbox.value);
            });

            // Example: Calculate shipping cost based on selected products or other rules
            const calculatedShippingCost = calculateShippingCost(selectedProducts);

            // Example: Calculate total order value based on selected products or other rules
            const calculatedTotalOrderValue = calculateTotalOrderValue(selectedProducts);

            // Set shipping cost and total order value in the form
            shippingCostInput.value = calculatedShippingCost;
            totalOrderValueInput.value = calculatedTotalOrderValue;

            // Handle submission to server (you need to implement this)
            // You can send the form data, selectedProducts, and calculated values to your server here
            // Replace this with your actual submission logic
            submitQuoteDataToServer({
                orderDate,
                customer,
                gstNo,
                shippingAddress,
                city,
                phoneNumber,
                email,
                pinCode,
                selectedProducts,
                calculatedShippingCost,
                calculatedTotalOrderValue,
            });

            // Clear the form for the next quote
            createQuoteForm.reset();
        });

        // Function to calculate shipping cost (example, replace with your logic)
        function calculateShippingCost(selectedProducts) {
            // Example: Calculate shipping cost based on selected products
            return selectedProducts.length * 10; // $10 per product
        }

        // Function to calculate total order value (example, replace with your logic)
        function calculateTotalOrderValue(selectedProducts) {
            // Example: Calculate total order value based on selected products
            return selectedProducts.length * 50; // $50 per product
        }

        // Function to submit quote data to the server (you need to implement this)
        function submitQuoteDataToServer(quoteData) {
            // Example: Send the quote data to your server for processing and storage
            // You need to implement this function based on your backend setup
            console.log("Submitting quote data to the server:", quoteData);
        }
    }

    // Check if we are on the Import Products Page
    if (window.location.pathname.endsWith("import-products.html")) {
        const importProductsForm = document.getElementById("import-products-form");
        const fileInput = document.getElementById("file-input");
        const importStatus = document.getElementById("import-status");

        importProductsForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const file = fileInput.files[0];
            if (!file) {
                alert("Please choose a file to import.");
                return;
            }

            try {
                // Simulate uploading and processing the file (replace with actual code)
                const { importedCount, failedCount } = await simulateFileUpload(file);

                // Display import status
                importStatus.innerHTML = `
                    <p>Status: Completed</p>
                    <p>Number of Products Imported: ${importedCount}</p>
                    <p>Number of Products Not Imported: ${failedCount}</p>
                `;
            } catch (error) {
                console.error("Error while importing:", error);
                alert("An error occurred while importing the file.");
            }
        });

        // Function to simulate file upload and processing (replace with actual logic)
        function simulateFileUpload(file) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate success
                    const importedCount = 50; // Example: Number of products successfully imported
                    const failedCount = 5; // Example: Number of products that failed to import

                    resolve({ importedCount, failedCount });
                }, 2000); // Simulate a delay for processing
            });
        }
    }

    // Function to navigate to the Employee Dashboard Page
    function navigateToEmployeeDashboard() {
        window.location.href = "employee-dashboard.html";
    }

    // Check if we are on the Customer Login Page
    if (window.location.pathname.endsWith("customer-login.html")) {
        const customerLoginForm = document.getElementById("customer-login-form");

        customerLoginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const customerIdName = document.getElementById("customer-id-name").value;
            const customerPassword = document.getElementById("password").value;

            // Example: Send a request to the server for customer authentication
            // You would replace this with actual API calls
            authenticateCustomer(customerIdName, customerPassword);
        });

        function authenticateCustomer(customerIdName, customerPassword) {
            // Example: Check customer credentials on the server
            // Replace this with your actual authentication logic
            // If authentication is successful, navigate to the Order Management Page (Customers)
            if (customerIdName === "default" && customerPassword === "12345") {
                navigateToCustomerOrderManagement();
            } else {
                alert("Invalid credentials. Please try again.");
            }
        }
    }

    // Function to navigate to the Order Management Page (Customers)
    function navigateToCustomerOrderManagement() {
        window.location.href = "customer-order-management.html";
    }
    function loadPendingQuotesAndOrders() {
        return {
            pendingQuotes: [
                {
                    orderId: 1,
                    orderDate: "2023-08-15",
                    shippingCost: "$10.00",
                    totalOrderValue: "$100.00",
                },
                {
                    orderId: 2,
                    orderDate: "2023-08-20",
                    shippingCost: "$15.00",
                    totalOrderValue: "$150.00",
                },
            ],
            orders: [
                {
                    orderId: 3,
                    orderDate: "2023-09-01",
                    shippingCost: "$12.00",
                    totalOrderValue: "$120.00",
                    status: "Approved",
                },
                {
                    orderId: 4,
                    orderDate: "2023-09-05",
                    shippingCost: "$20.00",
                    totalOrderValue: "$200.00",
                    status: "Completed",
                },
            ],
        };
    }

    // Function to display pending quotes
    function displayPendingQuotes(pendingQuotes) {
        const pendingQuotesList = document.getElementById("pending-quotes-list");

        pendingQuotes.forEach(function (quote) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <p>Order ID: <span>${quote.orderId}</span></p>
                <p>Date: <span>${quote.orderDate}</span></p>
                <p>Shipping Cost: <span>${quote.shippingCost}</span></p>
                <p>Total Order Value: <span>${quote.totalOrderValue}</span></p>
                <button class="approve-btn" data-order-id="${quote.orderId}">Approve</button>
            `;

            listItem.querySelector(".approve-btn").addEventListener("click", function () {
                // Handle quote approval (replace with your logic)
                approveQuote(quote.orderId);
            });

            pendingQuotesList.appendChild(listItem);
        });
    }

    // Function to approve a quote
    function approveQuote(orderId) {
        // Example: Check business rules before approval (replace with your logic)
        const currentDate = new Date();
        const quoteDate = new Date("2023-08-15"); // Replace with the actual quote date

        const daysDifference = Math.floor((currentDate - quoteDate) / (1000 * 60 * 60 * 24));

        if (daysDifference > 30) {
            alert("Quote approval failed. Order date is more than 30 days old.");
            return;
        }

        // Example: Perform quote approval (replace with your logic)
        // You can update the quote status to "Approved" in your database
        alert(`Quote ID ${orderId} approved!`);
    }

    // Function to display orders
    function displayOrder(orders) {
        const ordersList = document.getElementById("orders-list");

        orders.forEach(function (order) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <p>Order ID: <span>${order.orderId}</span></p>
                <p>Date: <span>${order.orderDate}</span></p>
                <p>Shipping Cost: <span>${order.shippingCost}</span></p>
                <p>Total Order Value: <span>${order.totalOrderValue}</span></p>
                <p>Status: <span>${order.status}</span></p>
            `;

            if (order.status !== "Approved") {
                const showInvoiceBtn = document.createElement("button");
                showInvoiceBtn.className = "show-invoice-btn";
                showInvoiceBtn.textContent = "Show Invoice";

                showInvoiceBtn.addEventListener("click", function () {
                    // Handle displaying the invoice for this order (replace with your logic)
                    showInvoice(order.orderId);
                });

                listItem.appendChild(showInvoiceBtn);
            }

            ordersList.appendChild(listItem);
        });
    }

    // Function to display the invoice
    function showInvoice(orderId) {
        // Example: Display the invoice for the specified order (replace with your logic)
        alert(`Displaying invoice for Order ID: ${orderId}`);
    }

    // Load pending quotes and orders when the page loads
    const { pendingQuotes, orders } = loadPendingQuotesAndOrders();
    displayPendingQuotes(pendingQuotes);
    displayOrder(orders);
    
});
