const container = document.querySelector(".box2");
        const icon = document.querySelector(".icon img");
        const centralDiv1 = document.querySelector(".box-1");
        const centralDiv2 = document.querySelector(".box-2");
        const centralDiv3 = document.querySelector(".box-3");
        const centralDiv4 = document.querySelector(".box-4");
        const centralDiv5 = document.querySelector(".box-5");
        const centralDiv6 = document.querySelector(".box-6");
        const centralDiv7 = document.querySelector(".box-7");
        const icon2 = document.querySelector(".icon2 img");

        // Calculate the initial angle when the page loads
        const initialX = container.offsetWidth / 2;
        const initialY = container.offsetHeight / 2;
        const initialRotation = Math.atan2(initialY, initialX) * (180 / Math.PI);
        const initialRotation2 = Math.atan2(initialY, initialX) * (-180 / Math.PI);
        icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
        icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;

        centralDiv1.addEventListener("mouseenter", () => {
            // Update the rotation angle when hovering over central-div
            const x = 5; // Adjust this value if needed
            const y = 5; // Adjust this value if needed
            const rotation = Math.atan2(y, x) * (90 / Math.PI);
            const rotation2 = Math.atan2(y, x) * (-250 / Math.PI);
            icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`;
        });

        centralDiv1.addEventListener("mouseleave", () => {
            // Reset the rotation when leaving central-div
            icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;
        });

        centralDiv2.addEventListener("mouseenter", () => {
            // Update the rotation angle when hovering over central-div
            const x = 5; // Adjust this value if needed
            const y = 5; // Adjust this value if needed
            const rotation = Math.atan2(y, x) * (150 / Math.PI);
            const rotation2 = Math.atan2(y, x) * (-230 / Math.PI);
            icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`;
        });

        centralDiv2.addEventListener("mouseleave", () => {
            // Reset the rotation when leaving central-div
            icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;
        });

        centralDiv3.addEventListener("mouseenter", () => {
            // Update the rotation angle when hovering over central-div
            const x = 5; // Adjust this value if needed
            const y = 5; // Adjust this value if needed
            const rotation = Math.atan2(y, x) * (170 / Math.PI);
            const rotation2 = Math.atan2(y, x) * (-210 / Math.PI);
            icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`;
        });

        centralDiv3.addEventListener("mouseleave", () => {
            // Reset the rotation when leaving central-div
            icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;
        });

        centralDiv4.addEventListener("mouseenter", () => {
            // Update the rotation angle when hovering over central-div
            const x = 5; // Adjust this value if needed
            const y = 5; // Adjust this value if needed
            const rotation = Math.atan2(y, x) * (190 / Math.PI);
            const rotation2 = Math.atan2(y, x) * (-190 / Math.PI);
            icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`;
        });

        centralDiv4.addEventListener("mouseleave", () => {
            // Reset the rotation when leaving central-div
            icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;
        });

        centralDiv5.addEventListener("mouseenter", () => {
            // Update the rotation angle when hovering over central-div
            const x = 5; // Adjust this value if needed
            const y = 5; // Adjust this value if needed
            const rotation = Math.atan2(y, x) * (210 / Math.PI);
            const rotation2 = Math.atan2(y, x) * (-170 / Math.PI);
            icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`;
        });

        centralDiv5.addEventListener("mouseleave", () => {
            // Reset the rotation when leaving central-div
            icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;
        });

        centralDiv6.addEventListener("mouseenter", () => {
            // Update the rotation angle when hovering over central-div
            const x = 5; // Adjust this value if needed
            const y = 5; // Adjust this value if needed
            const rotation = Math.atan2(y, x) * (230 / Math.PI);
            const rotation2 = Math.atan2(y, x) * (-150 / Math.PI);
            icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`;
        });

        centralDiv6.addEventListener("mouseleave", () => {
            // Reset the rotation when leaving central-div
            icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;
        });

        centralDiv7.addEventListener("mouseenter", () => {
            // Update the rotation angle when hovering over central-div
            const x = 5; // Adjust this value if needed
            const y = 5; // Adjust this value if needed
            const rotation = Math.atan2(y, x) * (250 / Math.PI);
            const rotation2 = Math.atan2(y, x) * (-90 / Math.PI);
            icon.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${rotation2}deg)`;
        });

        centralDiv7.addEventListener("mouseleave", () => {
            // Reset the rotation when leaving central-div
            icon.style.transform = `translate(-50%, -50%) rotate(${initialRotation}deg)`;
            icon2.style.transform = `translate(-50%, -50%) rotate(${initialRotation2}deg)`;
        });