export default function WorkoutSetItem({ type }) {
  return (
    <div>
      <div className={`w-full ${type == "weighted" ? "" : "hidden"}`}>
        <div className="w-full flex p-2">
          <div className="w-4/6">Reps</div>
          <div className="w-2/6 flex justify-between items-center">
            <button
              type="button"
              onClick={() =>
                updateSetReps(set.reps - 1 < 1 ? 1 : set.reps - 1, i)
              }
            >
              <Minus className="w-4 h-4" />
            </button>
            <div>{set.reps}</div>
            <button
              type="button"
              onClick={() => updateSetReps(set.reps + 1, i)}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className={`${type == "bodyweighted" ? "" : "hidden"}`}>
        <div className="w-full flex p-2">
          <div className="w-4/6">Reps</div>
          <div className="w-2/6 flex justify-between items-center">
            <button
              type="button"
              onClick={() =>
                updateSetReps(set.reps - 1 < 1 ? 1 : set.reps - 1, i)
              }
            >
              <Minus className="w-4 h-4" />
            </button>
            <div>{set.reps}</div>
            <button
              type="button"
              onClick={() => updateSetReps(set.reps + 1, i)}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className={`${type == "timed" ? "" : "hidden"}`}>
        <div className="w-full flex p-2">
          <div className="w-4/6">Time</div>
          <div className="w-2/6 flex justify-between items-center"></div>
        </div>
      </div>
    </div>
  );
}
