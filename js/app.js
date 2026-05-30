document.getElementById('orderForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Stop standard page redirect

    // --- CONFIGURATION ZONE ---
    const whatsappNumber = "2348114054457";
    const formspreeEndpoint = "https://formspree.io/f/mjgzlwnw";
    // --------------------------

    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('formStatus');

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerText = "Processing Your Order...";
    statusDiv.classList.remove('hidden', 'bg-red-50', 'text-red-700', 'bg-emerald-50', 'text-emerald-700');
    statusDiv.classList.add('bg-amber-50', 'text-amber-700');
    statusDiv.innerText = "Sending brief to email engine...";

    // Gather values
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('emailAddress').value;
    const style = document.getElementById('apparelStyle').value;
    const qty = document.getElementById('quantity').value;
    const brief = document.getElementById('projectBrief').value || 'No brief provided';

    // 1. Prepare data structures
    // Create a beautifully formatted raw text string for WhatsApp
    const rawMessage = `
            🔥 *PEEJAYSTORE — NEW CLIENT BRIEF*  

            👤 *Client:* ${name}  
            ✉️ *Contact:* ${email}  

            👕 *Selected Style:* ${style}  
            📦 *Order Volume:* ${qty}  

            🧠 *Creative Direction:*  
            ${brief}  

            ⚡ Submitted via PEEJAYSTORE Web Portal
            `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;

    // Create the clean object payload for Formspree
    const emailPayload = {
        "Client Name": name,
        "Email Address": email,
        "Apparel Style Selected": style,
        "Order Quantity": qty,
        "Design Instructions Brief": brief
    };

    // 2. DISPATCH TO GMAIL VIA AJAX FETCH BACKEND
    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(emailPayload)
        });

        if (response.ok) {
            // Success State
            statusDiv.classList.remove('bg-amber-50', 'text-amber-700');
            statusDiv.classList.add('bg-emerald-50', 'text-emerald-700');

            // Provide a clear receipt & an explicit manual button to guarantee popup blockers don't ruin the flow
            statusDiv.innerHTML = `
                    <div class="text-left space-y-2">
                        <p class="font-bold text-center text-emerald-800">✨ Brief Logged Successfully!</p>
                        <p class="text-xs text-center text-emerald-600 mb-3">Form copy routed to email. Click below to finalize setup with your design manager.</p>
                        <div class="text-center my-3">
                            <a href="${whatsappUrl}" target="_blank" class="inline-block bg-emerald-600 text-white font-bold px-5 py-2 rounded shadow hover:bg-emerald-700 transition duration-150">
                                💬 Launch WhatsApp Chat
                            </a>
                        </div>
                    </div>
                `;

            // Optional: Attempt to auto-launch the tab for desktop users instantly
            window.open(whatsappUrl, '_blank');

            document.getElementById('orderForm').reset();
        } else {
            throw new Error("Email engine rejected payload.");
        }
    } catch (error) {
        // Graceful Error fallback with fallback manual link button
        statusDiv.classList.remove('bg-amber-50', 'text-amber-700');
        statusDiv.classList.add('bg-red-50', 'text-red-700');
        statusDiv.innerHTML = `
                <div class="text-left space-y-2">
                    <p>⚠️ Email server is busy, but your brief is ready for delivery via WhatsApp.</p>
                    <div class="text-center mt-2">
                        <a href="${whatsappUrl}" target="_blank" class="inline-block bg-red-600 text-white font-bold px-4 py-1.5 rounded text-xs shadow hover:bg-red-700">
                            Send Direct via WhatsApp instead
                        </a>
                    </div>
                </div>
            `;
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Design Brief & Request Renders";
    }
});