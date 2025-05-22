import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { getTopics } from "../../lib/api";

export default function SpinningWheel() {
  const [topics, setTopics] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const wheelRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const fetchedTopics = await getTopics();
        setTopics(fetchedTopics);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch topics:", error);
        setIsLoading(false);
      }
    };
    fetchTopics();
  }, []);

  const spinWheel = () => {
    if (isSpinning || topics.length === 0) return;

    setIsSpinning(true);
    setSelectedTopic(null);

    // Calculate a random number of full rotations (2-5) plus a random position
    const spinDuration = 5000; // 5 seconds
    const minRotations = 2;
    const maxRotations = 5;
    const randomRotations =
      Math.floor(Math.random() * (maxRotations - minRotations + 1)) +
      minRotations;
    const randomAngle = Math.floor(Math.random() * 360);
    const totalRotation = randomRotations * 360 + randomAngle;

    setRotationDegrees(totalRotation);

    // Calculate which topic was selected based on final position
    setTimeout(() => {
      const normalizedDegree = totalRotation % 360;
      const segmentSize = 360 / topics.length;
      // Fix: use Math.floor((360 - normalizedDegree) / segmentSize) % topics.length for correct selection
      let selectedIndex = Math.floor((360 - normalizedDegree) / segmentSize) % topics.length;
      if (selectedIndex < 0) selectedIndex += topics.length;
      setSelectedTopic(topics[selectedIndex]);
      setIsSpinning(false);
    }, spinDuration);
  };

  const viewSelectedTopic = () => {
    if (selectedTopic) {
      navigate(`/topics/${selectedTopic.id}`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px]">
        <Loader2 className="w-12 h-12 animate-spin text-slate-600 dark:text-slate-300" />
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Loading Topics...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-lg aspect-square">
        {/* Pointer/Arrow */}
        <div
          className="absolute z-10 w-8 h-16 -translate-x-1/2 -translate-y-1/2 bg-red-500 left-1/2 top-0 clip-path-triangle"
        ></div>

        {/* Wheel */}
        <div
          ref={wheelRef}
          className="relative w-full h-full rounded-full overflow-hidden border-8 border-slate-300 dark:border-slate-600 shadow-xl"
          style={{
            transform: `rotate(${rotationDegrees}deg)`,
            transition: isSpinning
              ? "transform 5s cubic-bezier(0.2, 0.8, 0.2, 1)"
              : "none",
          }}
        >
          {topics.map((topic, index) => {
            const segmentSize = 360 / topics.length;
            const rotation = index * segmentSize;
            const skew = 90 - segmentSize;
            const hue = (index * (360 / topics.length)) % 360;
            const backgroundColor = `hsl(${hue}, 70%, 60%)`;

            return (
              <div
                key={topic.id}
                className="absolute top-0 right-0 w-1/2 h-1/2 origin-bottom-left text-white font-medium flex items-center justify-center overflow-hidden"
                style={{
                  transform: `rotate(${rotation}deg) skew(${skew}deg)`,
                  backgroundColor,
                }}
              >
                <div
                  className="text-center whitespace-nowrap text-sm"
                  style={{
                    transform: `skew(${-skew}deg) rotate(${segmentSize / 2}deg)`,
                    width: "200%",
                    marginLeft: "50%",
                  }}
                >
                  {topic.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 gap-4">
        <Button onClick={spinWheel} disabled={isSpinning}>
          {isSpinning ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Spinning...
            </>
          ) : (
            "Spin the Wheel"
          )}
        </Button>
        {selectedTopic && (
          <div className="p-4 mt-4 text-center">
            <h3 className="mb-2 text-xl font-semibold text-slate-800 dark:text-slate-100">
              Your topic: {selectedTopic.title}
            </h3>
            <p className="mb-4 text-slate-600 dark:text-slate-300">
              {selectedTopic.shortDescription}
            </p>
            <Button onClick={viewSelectedTopic} variant="outline">
              Explore This Topic
            </Button>
          </div>
        )}
      </div>
      <style>{`
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}
