package wandering.map;

import java.awt.Font;
import javax.swing.JLabel;

class MapTile extends JLabel {
    static Font TILE_FONT = new Font(Font.MONOSPACED, Font.PLAIN, 14);
    
    MapTile() {
        super();
        setFont(TILE_FONT);
        display = " ";
        setText(display);
    }
}