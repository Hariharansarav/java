public class vowel {
    public static void main(String[] args) {
        String str ="Hello World";
        String result = " ";
        for(int i=0; i <= str.length(); i++){
            char ch = str.charAt(i);
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){
               result = result + ch + ch; 
            }
            else{
                result = result + ch;
            }
        }


    }
}
