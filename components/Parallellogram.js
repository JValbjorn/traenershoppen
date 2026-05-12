export default function Parallellogram({text, onClick}) {
    return (
      <div className="skew-x-[-10deg] px-4 border-3 border-light-green ">
        
        <button
          onClick={onClick}
          className="skew-x-10 w-full h-full text-center"
        >
          {text}
        </button>
      </div>
    );
}