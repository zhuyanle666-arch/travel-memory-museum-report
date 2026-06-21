(() => {
  const data = window.WEEK1_BACKLOG;
  const body = document.querySelector("#backlog-body");
  if (!data || !body) return;

  const fields = {
    day: document.querySelector("#backlog-day"),
    workstream: document.querySelector("#backlog-workstream"),
    priority: document.querySelector("#backlog-priority"),
    search: document.querySelector("#backlog-search")
  };
  const result = document.querySelector("#backlog-result");

  document.querySelector("#backlog-task-count").textContent = data.summary.tasks;
  document.querySelector("#backlog-hour-count").textContent = data.summary.hours;
  document.querySelector("#backlog-must-count").textContent = data.summary.must;
  document.querySelector("#backlog-decision-count").textContent = data.summary.openDecisions;

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);

  const addOptions = (select, values) => {
    [...new Set(values)].sort().forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.append(option);
    });
  };

  addOptions(fields.day, data.tasks.map((task) => task.day));
  addOptions(fields.workstream, data.tasks.map((task) => task.workstream));
  addOptions(fields.priority, data.tasks.map((task) => task.priority));

  const render = () => {
    const query = fields.search.value.trim().toLowerCase();
    const matchesQuery = (task) => {
      if (!query) return true;
      const text = Object.values(task).join(" ").toLowerCase();
      if (query.length > 3) return text.includes(query);
      return text.split(/[^a-z0-9]+/).some((token) => token.startsWith(query));
    };
    const visible = data.tasks.filter((task) =>
      (!fields.day.value || task.day === fields.day.value) &&
      (!fields.workstream.value || task.workstream === fields.workstream.value) &&
      (!fields.priority.value || task.priority === fields.priority.value) &&
      matchesQuery(task)
    );

    body.innerHTML = visible.length ? visible.map((task) => `
      <tr>
        <td>${escapeHtml(task.id)}</td>
        <td>${escapeHtml(task.day)}</td>
        <td>${escapeHtml(task.workstream)}</td>
        <td><span class="priority-pill ${escapeHtml(task.priority.toLowerCase())}">${escapeHtml(task.priority)}</span></td>
        <td>${escapeHtml(task.task)}</td>
        <td>${escapeHtml(task.output)}</td>
        <td>${escapeHtml(task.owner)}</td>
        <td>${escapeHtml(task.hours)}</td>
        <td><span class="status-pill">${escapeHtml(task.status)}</span></td>
      </tr>`).join("") : '<tr><td class="backlog-empty" colspan="9">No tasks match these filters.</td></tr>';
    result.textContent = visible.length === data.tasks.length ? `Showing all ${visible.length} tasks` : `Showing ${visible.length} of ${data.tasks.length} tasks`;
  };

  Object.values(fields).forEach((field) => field.addEventListener(field === fields.search ? "input" : "change", render));
  render();
})();
