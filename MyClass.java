/*
Welcome to JDoodle!

You can execute code here in 88 languages. Right now you’re in the Java IDE.

  1. Click the orange Execute button ▶ to execute the sample code below and see how it works.

  2. Want help writing or debugging code? Type a query into JDroid on the right hand side ---------------->

  3.Try the menu buttons on the left. Save your file, share code with friends and open saved projects.

Want to change languages? Try the search bar up the top.
*/
import java.util.*;
class Tax {
    String name;
    double percent;
    public Tax(String name, double percent){
        this.name=name;
        this.percent=percent;
    }
}
class Taxgroup{
    String name;
    List<Tax> taxes;
    public Taxgroup(String name,List<Tax>taxes){
        this.name=name;
        this.taxes=taxes;
    }
    public double Ttp(){
        return taxes.stream().mapToDouble(t -> t.percent).sum();
    }
    }
class Product{
    String name;
    double price;
    Taxgroup taxgroup; 
    public Product(String name, double price, Taxgroup taxgroup){
        this.name=name;
        this.price= price;
        this.taxgroup=taxgroup;
    }
    public double getTa(){
        return (price*taxgroup.Ttp())/100;
    }
}
class Invoice{
    List<Product> purchasedproduct;
    public Invoice(){
        this.purchasedproduct=new ArrayList<>();
    }
    public void addProduct(Product product){
        purchasedproduct.add(product);
    }
    public void gI(){
        double tp=0,tt=0;
        System.out.println("----------------");
        System.out.println("Product"+"   Price"+" Tax");
        for (Product product: purchasedproduct){
            double ta=product.getTa();
            System.out.printf("%-10s%.2f %.2f\n",product.name,product.price,ta);
            tp+=product.price;
            tt+=ta;
        }
        System.out.println("\nTotal " +tp + " "+tt+"\n");
        System.out.println("Grand Total "+(tp+tt));
        System.out.println("-----------------");
    }
}

public class MyClass{    
  public static void main(String args[]) {
    // Scanner sc= sc.System.in;
    Scanner sc= new Scanner(System.in);
    Tax vat=new Tax("VAT",2);
    Tax sgst=new Tax("SGST",1);
    Tax cgst=new Tax("CGST",1);
    Tax none=new Tax("no tax",0);
    
    Taxgroup noTax=new Taxgroup("No Tax",List.of(none));
    Taxgroup vatonly=new Taxgroup("VAT only",List.of(vat));
    Taxgroup gst=new Taxgroup("SGST+CGST",List.of(sgst,cgst));
    
    Map<Integer, Product> productMap= new HashMap<>();
    productMap.put(1,new Product("RICE",50,noTax));
    productMap.put(2,new Product("Petrol",65,vatonly));
    productMap.put(3,new Product("Soap",10,gst));
    // productMap.put(1,new Product("RICE",50,noTax));
    Invoice invoice=new Invoice();
    while(true){
        System.out.println("Select a product");
        for(Map.Entry<Integer,Product> entry: productMap.entrySet()){
            System.out.println(entry.getKey()+" "+entry.getValue().name+" "+entry.getValue().price);
        }
        System.out.println("Enter Id to add product or 0 to generate invoice ");
    int option=sc.nextInt();
    // System.out.println("--------Product Menu------");
    if (option==0){
        break;
    }
    else if(productMap.containsKey(option)){
        invoice.addProduct(productMap.get(option));
        System.out.println(productMap.get(option).name+" Successfully added to Invoice");
    }
    else{
        System.out.println("Invalid option");
    }
    }
    invoice.gI();
    // Scanner.close();
  }
}
    