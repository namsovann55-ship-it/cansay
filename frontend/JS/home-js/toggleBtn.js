export default function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");

    // Toggle sidebar ពេល click button
    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // បញ្ឈប់ event ឲ្យមិនឆ្លងទៅ document
        sidebar.classList.toggle("active");
    });

    // Click ខាងក្រៅ sidebar → បិទវា
    document.addEventListener("click", (e) => {
        // បើ click មិនលើ sidebar ឬ toggleBtn
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove("active");
        }
    });
}
