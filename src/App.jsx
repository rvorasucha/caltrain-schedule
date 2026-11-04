import { useState } from "react";
import { MOCK_TRAINS } from "./scheduleData";

function minutesFromClock(timeLabel) {
  const [clock, meridiem] = timeLabel.split(" ");
  let [hours, minutes] = clock.split(":").map(Number);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function nextSouthboundFromSanFrancisco(now = new Date()) {
  const departures = MOCK_TRAINS.filter(
    (train) =>
      train.origin === "San Francisco" && train.direction === "Southbound",
  ).sort(
    (a, b) =>
      minutesFromClock(a.departureTime) - minutesFromClock(b.departureTime),
  );

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const upcoming = departures.find(
    (train) => minutesFromClock(train.departureTime) > nowMinutes,
  );

  if (upcoming) return { train: upcoming, tomorrow: false };
  if (departures.length > 0) return { train: departures[0], tomorrow: true };
  return null;
}

function App() {
  const [result, setResult] = useState(null);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-lg text-center">
        <button
          type="button"
          onClick={() => setResult(nextSouthboundFromSanFrancisco())}
          className="rounded-full bg-red-700 px-6 py-3 text-lg font-semibold text-white"
        >
          Next train
        </button>

        {result?.train && (
          <p className="mt-8 text-lg leading-relaxed text-slate-800">
            Train {result.train.trainNum} ({result.train.type}) leaves San
            Francisco {result.tomorrow ? "tomorrow" : "today"} at{" "}
            {result.train.departureTime}, southbound to{" "}
            {result.train.destination}.
          </p>
        )}
      </div>
    </main>
  );
}

export default App;
